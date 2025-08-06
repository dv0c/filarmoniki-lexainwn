'use client';
import { RippleButton } from '@/components/animate-ui/buttons/ripple';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatDateInGreek } from '@/lib/formatDate';
import { ChevronDown, FileText, Loader2, Search, Tag, Trash, User, XCircle } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

// --- Interfaces ---
interface Instrument {
    id: string;
    instrumentType: string;
    brand: string;
    barcode: string;
    charges: {
        id: string;
        date: string;
        student: {
            id: string;
            firstName: string;
            lastName: string;
        }
    }[];
}

interface Student {
    id: string;
    firstName: string;
    lastName: string;
}


// --- Main Page Component ---
const InstrumentProfilePage = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const router = useRouter();

    const [instrument, setInstrument] = useState<Instrument | null>(null);
    const [students, setStudents] = useState<Student[]>([]);
    const [selectedStudents, setSelectedStudents] = useState<Student[]>([]); // Changed to handle multiple students
    const [isLoading, setIsLoading] = useState(true);
    const [refresh, setRefresh] = useState(0);
    const [isAssignDialogOpen, setIsAssignDialogOpen] = useState(false);
    const [studentSearch, setStudentSearch] = useState('');

    // Filter students based on search
    const filteredStudents = students.filter(s =>
        s.firstName.toLowerCase().includes(studentSearch.toLowerCase()) ||
        s.lastName.toLowerCase().includes(studentSearch.toLowerCase())
    );

    // Effect to fetch instrument data
    useEffect(() => {
        if (id) {
            setIsLoading(true);
            fetch(`/api/instruments?id=${id}`)
                .then(res => res.ok ? res.json() : Promise.reject(res))
                .then(data => setInstrument(data))
                .catch(() => setInstrument(null))
                .finally(() => setIsLoading(false));
        }
    }, [id, refresh]);

    // Effect to fetch students for assignment dialog
    useEffect(() => {
        fetch('/api/mathites')
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(data => setStudents(data))
            .catch(err => console.error("Failed to fetch students:", err));
    }, []);

    // --- Handlers ---
    const handleDeleteCharge = async (chargeId: string) => {
        if (chargeId) {
            await fetch(`/api/charges`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chargeId: chargeId })
            }).then((res) => {
                if (res.ok) toast.success('Το όργανο ξεχρεώθηκε επιτυχώς.');
                else toast.error('Αποτυχία ξεχρέωσης του οργάνου.');
            }).catch(() => {
                toast.error('Αποτυχία επικοινωνίας με τον διακομιστή.');
            }).finally(() => setRefresh(prev => prev + 1));
        }
    };

    // --- Multi-select Handlers ---
    const handleStudentToggle = (student: Student) => {
        setSelectedStudents(prev => {
            const isSelected = prev.some(s => s.id === student.id);
            if (isSelected) {
                return prev.filter(s => s.id !== student.id);
            } else {
                return [...prev, student];
            }
        });
    };

    const handleSelectAllStudents = () => {
        if (selectedStudents.length === filteredStudents.length) {
            setSelectedStudents([]);
        } else {
            setSelectedStudents(filteredStudents);
        }
    };

    const handleAssignStudents = async () => {
        if (selectedStudents.length === 0 || !instrument) return;

        const assignmentPromises = selectedStudents.map(student =>
            fetch(`/api/charges`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ instrumentId: instrument.id, studentId: student.id })
            })
        );

        try {
            const results = await Promise.all(assignmentPromises);
            const successCount = results.filter(res => res.ok).length;
            const errorCount = results.length - successCount;

            if (successCount > 0) {
                toast.success(`Το όργανο ανατέθηκε σε ${successCount} μαθητές επιτυχώς.`);
            }
            if (errorCount > 0) {
                toast.error(`Αποτυχία χρέωσης σε ${errorCount} μαθητές (πιθανόν ήδη χρεωμένοι).`);
            }

            setIsAssignDialogOpen(false);
            setSelectedStudents([]);
        } catch (error) {
            toast.error('Αποτυχία χρέωσης οργάνου.');
        } finally {
            setRefresh(prev => prev + 1);
        }
    };

    // --- Render Logic ---
    if (isLoading) {
        return <div className="flex justify-center items-center h-screen"><Loader2 className='h-12 w-12 animate-spin' /></div>;
    }

    if (!instrument) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-center p-8 bg-white rounded-lg shadow-md">
                    <XCircle className="w-12 h-12 mx-auto text-red-500" />
                    <h2 className="mt-4 text-2xl font-semibold text-gray-800">Σφάλμα</h2>
                    <p className="mt-2 text-gray-600">Δεν βρέθηκε το όργανο. Μπορεί να έχει διαγραφεί.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-4 sm:p-6 lg:p-8 font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Προφίλ Οργάνου</h1>
                    <p className="text-gray-500 mt-1">Διαχείριση πληροφοριών και χρέωσης του οργάνου.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Instrument Details */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md border">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary text-white text-2xl font-bold mr-4">
                                <FileText size={32} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">{instrument.brand}</h2>
                                <p className="text-gray-500">{instrument.instrumentType}</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center text-gray-700">
                                <Tag className="w-5 h-5 mr-3" />
                                <span>Barcode: <span className='font-mono bg-gray-100 px-2 py-1 rounded'>{instrument.barcode}</span></span>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <User className="w-5 h-5 mr-3" />
                                <span>Κατάσταση:
                                    <span className={`ml-2 px-3 py-1 text-sm font-medium rounded-full ${instrument.charges.length > 0 ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'}`}>
                                        {instrument.charges.length > 0 ? 'Χρεωμένο' : 'Διαθέσιμο'}
                                    </span>
                                </span>
                            </div>
                            {instrument.charges.length > 0 && (
                                <div className='bg-gray-50 p-4 rounded-lg border'>
                                    <h3 className='font-semibold mb-2'>Χρεωμένο σε:</h3>
                                    <div className="space-y-2">
                                        {instrument.charges.map(charge => (
                                            <Link href={'/dashboard/students/' + charge.student.id} key={charge.id} className='flex items-center justify-between transition-all hover:bg-accent bg-white p-2 rounded shadow-sm'>
                                                <div className='flex flex-col'>
                                                    <p className="font-medium">{charge.student.firstName} {charge.student.lastName}</p>
                                                    <p className="text-xs text-gray-500">Ημ/νία & Ώρα: {formatDateInGreek(charge.date)}</p>
                                                </div>
                                                <RippleButton onClick={() => handleDeleteCharge(charge.id)} size={'sm'} variant={'destructive'}>
                                                    <Trash size={14} />
                                                </RippleButton>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Assignment */}
                    <div className="bg-white p-6 rounded-xl shadow-md h-fit border">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                            <User className="w-6 h-6 mr-2" />
                            Χρέωση σε Μαθητή
                        </h3>
                        <div className="space-y-4">
                            <Dialog open={isAssignDialogOpen} onOpenChange={setIsAssignDialogOpen}>
                                <DialogTrigger asChild>
                                    <RippleButton variant="outline" className="w-full flex items-center justify-between">
                                        <span>{selectedStudents.length > 0 ? `${selectedStudents.length} μαθητές επιλεγμένοι` : "Επιλέξτε μαθητές"}</span>
                                        <ChevronDown className="h-4 w-4 opacity-50" />
                                    </RippleButton>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl">
                                    <DialogHeader>
                                        <DialogTitle>Επιλογή Μαθητών</DialogTitle>
                                    </DialogHeader>
                                    <div className="relative my-4">
                                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                        <Input placeholder="Αναζήτηση μαθητή..." value={studentSearch} onChange={(e) => setStudentSearch(e.target.value)} className="pl-10" />
                                    </div>
                                    <div className="border rounded-lg max-h-80 overflow-y-auto">
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="w-12">
                                                        <input type="checkbox" onChange={handleSelectAllStudents} checked={selectedStudents.length === filteredStudents.length && filteredStudents.length > 0} />
                                                    </TableHead>
                                                    <TableHead>Όνομα</TableHead>
                                                    <TableHead>Επώνυμο</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {filteredStudents.map(s => (
                                                    <TableRow key={s.id} onClick={() => handleStudentToggle(s)} className={`cursor-pointer ${selectedStudents.some(sel => sel.id === s.id) ? 'bg-primary/10' : ''}`}>
                                                        <TableCell>
                                                            <input type="checkbox" checked={selectedStudents.some(sel => sel.id === s.id)} onChange={() => handleStudentToggle(s)} />
                                                        </TableCell>
                                                        <TableCell>{s.firstName}</TableCell>
                                                        <TableCell>{s.lastName}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                    {/* Selected Students Preview */}
                                    {selectedStudents.length > 0 && (
                                        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-medium text-primary">
                                                    Επιλεγμένοι Μαθητές ({selectedStudents.length}):
                                                </h4>
                                                <RippleButton
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() => setSelectedStudents([])}
                                                    className="text-xs"
                                                >
                                                    Καθαρισμός Όλων
                                                </RippleButton>
                                            </div>
                                            <div className="max-h-32 overflow-y-auto space-y-2">
                                                {selectedStudents.map((s) => (
                                                    <div key={s.id} className="text-sm bg-white rounded p-2 border">
                                                        <div className="flex items-center justify-between">
                                                            <span>
                                                                <span className="font-medium">{s.firstName} {s.lastName}</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </DialogContent>
                            </Dialog>
                            <RippleButton className='w-full' onClick={handleAssignStudents} disabled={selectedStudents.length === 0}>
                                Χρέωση σε {selectedStudents.length > 0 ? `${selectedStudents.length} Μαθητές` : 'Μαθητές'}
                            </RippleButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstrumentProfilePage;

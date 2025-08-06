'use client';
import { RippleButton } from '@/components/animate-ui/buttons/ripple';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown, Guitar, Home, Loader2, Phone, Shirt, Trash, XCircle, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatDateInGreek } from '@/lib/formatDate';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

// --- Interfaces ---
interface Instrument {
    id: string;
    instrumentType: string;
    brand: string;
    barcode: string;
}

interface Student {
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    hasUniform: boolean;
    charges: {
        id: string;
        instrument: Instrument;
    }[];
}

// --- Main Page Component (for Next.js App Router) ---
const StudentProfilePage = ({ params }: { params: { id: string } }) => {
    // @ts-ignore
    const { id } = use(params as any);
    const router = useRouter()

    const [instruments, setInstruments] = useState<Instrument[]>([]);
    const [selectedInstruments, setSelectedInstruments] = useState<Instrument[]>([]);
    const [student, setStudent] = useState<Student | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [refresh, setRefresh] = useState(0)
    const [instrumentSearch, setInstrumentSearch] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // Handle individual instrument selection
    const handleInstrumentToggle = (instrument: Instrument) => {
        setSelectedInstruments(prev => {
            const isSelected = prev.some(item => item.id === instrument.id);
            if (isSelected) {
                return prev.filter(item => item.id !== instrument.id);
            } else {
                return [...prev, instrument];
            }
        });
    };

    // Handle select all functionality
    const handleSelectAll = () => {
        if (selectedInstruments.length === filteredInstruments.length) {
            setSelectedInstruments([]);
        } else {
            setSelectedInstruments(filteredInstruments);
        }
    };

    // Clear all selections
    const clearSelections = () => {
        setSelectedInstruments([]);
    };

    // Filter instruments based on search
    const filteredInstruments = instruments.filter(inst =>
        inst.brand.toLowerCase().includes(instrumentSearch.toLowerCase()) ||
        inst.instrumentType.toLowerCase().includes(instrumentSearch.toLowerCase()) ||
        inst.barcode.toLowerCase().includes(instrumentSearch.toLowerCase())
    );

    // Effect to fetch instruments from the real API
    useEffect(() => {
        fetch('/api/instruments')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok for instruments');
                }
                return res.json();
            })
            .then((data: Instrument[]) => {
                setInstruments(data);
            })
            .catch(err => console.error("Failed to fetch instruments:", err));
    }, []);

    // Effect to fetch student data from the real API
    useEffect(() => {
        if (id) {
            setIsLoading(true);
            fetch(`/api/mathites?id=${id}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok for student');
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data)
                    setStudent(data);
                })
                .catch(err => {
                    console.error("Failed to fetch student:", err);
                    setStudent(null);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [id, refresh]);

    const handleDeleteCharge = async (chargeId: string) => {
        if (chargeId) {
            await fetch(`/api/charges`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chargeId })
            }).then((res) => {
                if (res.status === 200) {
                    toast.success('Το όργανο ξεχρεώθηκε επιτυχώς από τον μαθητή.');
                }
                if (res.status === 400) {
                    toast.error('Αυτό το όργανο δεν έχει ανατεθεί σε αυτόν τον μαθητή.');
                }
            }).catch(() => {
                toast.error('Αποτυχία διαγραφής του οργάνου.');
            }).finally(() => {
                setRefresh(prev => prev + 1)
            })
        }
    }

    const handleAssignInstrument = async () => {
        if (selectedInstruments.length === 0) return;

        const assignmentPromises = selectedInstruments.map(instrument =>
            fetch(`/api/charges`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ instrumentId: instrument.id, studentId: id })
            })
        );

        try {
            const results = await Promise.all(assignmentPromises);
            let successCount = 0;
            let errorCount = 0;

            results.forEach((res, index) => {
                if (res.status === 200) {
                    successCount++;
                } else if (res.status === 400) {
                    errorCount++;
                }
            });

            if (successCount > 0) {
                toast.success(`${successCount} όργανα ανατέθηκαν επιτυχώς στον/στην ${student?.firstName}.`);
            }
            if (errorCount > 0) {
                toast.error(`${errorCount} όργανα δεν μπόρεσαν να ανατεθούν (ήδη ανατεθειμένα).`);
            }

            // Clear selections after assignment
            setSelectedInstruments([]);
            setIsDialogOpen(false);
        } catch (error) {
            toast.error('Αποτυχία χρέωση οργάνων.');
        } finally {
            setRefresh(prev => prev + 1);
        }
    };

    // Loading state UI
    if (isLoading) {
        return (
            <div className="flex justify-center items-center">
                <Loader2 className='h-12 w-12 animate-spin' />
            </div>
        );
    }

    // When student data is not found or fails to load
    if (!student) {
        return (
            <div className="flex justify-center items-center">
                <div className="text-center p-8 bg-white rounded-lg shadow-md">
                    <XCircle className="w-12 h-12 mx-auto text-red-500" />
                    <h2 className="mt-4 text-2xl font-semibold text-gray-800">Σφάλμα</h2>
                    <p className="mt-2 text-gray-600">Δεν ήταν δυνατή η φόρτωση των δεδομένων του μαθητή. Παρακαλώ δοκιμάστε ξανά αργότερα.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-4 sm:p-6 lg:p-8 font-sans">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Προφίλ Μαθητή</h1>
                    <p className="text-gray-500 mt-1">Διαχείριση πληροφοριών μαθητή και χρέωσης οργάνων.</p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Student Details */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md border">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary text-white text-2xl font-bold mr-4">
                                {student.firstName.charAt(0)}{student.lastName.charAt(0)}
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">{student.firstName} {student.lastName}</h2>
                                <p className="text-gray-500">Αριθμός ID: {id}</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center text-gray-700">
                                <Home className="w-5 h-5 mr-3" />
                                <span>{student.address}</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <Phone className="w-5 h-5 mr-3" />
                                <span>{student.phoneNumber || 'Δεν έχει οριστεί'}</span>
                            </div>
                            <div className="flex items-center">
                                <Shirt className="w-5 h-5 mr-3" />
                                <span className={`px-3 py-1 text-sm font-medium rounded-full ${student.hasUniform
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-red-100 text-red-800'
                                    }`}>
                                    {student.hasUniform ? 'Έχει Στολή' : 'Δεν έχει Στολή'}
                                </span>
                            </div>
                            {student.charges.length > 0 && (

                                <div className='bg-gray-50 p-4 rounded-lg border'>
                                    <h3 className='font-semibold mb-2'>Χρεωμένο σε:</h3>

                                    <div className="">
                                        <div className={`px-3 py-1 text-sm font-medium flex flex-col rounded-full
                                    }`}>
                                            {student.charges.map((item, index) => (
                                                <Link href={'/dashboard/instruments/' + item.instrument.id} key={index + 1} className='flex items-center justify-between hover:bg-accent transition-all bg-white p-2 rounded shadow-sm'>
                                                    <div className='flex flex-col'>
                                                        <p className="font-medium">{item.instrument.instrumentType} ~ <Badge>{item.instrument.barcode}</Badge></p>
                                                        <p className="text-xs text-gray-500">Ημ/νία & Ώρα: {formatDateInGreek(item.date)}</p>
                                                    </div>
                                                    <RippleButton onClick={() => handleDeleteCharge(item.id)} size={'sm'} variant={'destructive'}>
                                                        <Trash size={14} />
                                                    </RippleButton>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Right Column: Instrument Assignment */}
                    <div className="bg-white p-6 rounded-xl shadow-md h-fit border">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                            <Guitar className="w-6 h-6 mr-2" />
                            Χρέωση Οργάνου
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Διαθέσιμα Όργανα
                                </label>
                                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                                    <DialogTrigger asChild>
                                        <RippleButton variant="outline" className="w-full flex items-center justify-between">
                                            <span>
                                                {selectedInstruments.length > 0
                                                    ? `${selectedInstruments.length} όργανα επιλεγμένα`
                                                    : "Επιλέξτε όργανα"}
                                                {selectedInstruments.length > 0 && (
                                                    <p className='text-xs'>
                                                        Κάντε κλικ για προβολή/επεξεργασία
                                                    </p>
                                                )}
                                            </span>
                                            <ChevronDown className="h-4 w-4 opacity-50" />
                                        </RippleButton>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-4xl max-h-[80vh]">
                                        <DialogHeader>
                                            <DialogTitle className="flex items-center gap-2">
                                                <Guitar className="w-5 h-5" />
                                                Επιλογή Οργάνου
                                            </DialogTitle>
                                        </DialogHeader>

                                        <div className="space-y-4">
                                            {/* Search Input */}
                                            <div className="relative">
                                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                                <Input
                                                    placeholder="Αναζήτηση οργάνων (μάρκα, τύπος, barcode)..."
                                                    value={instrumentSearch}
                                                    onChange={(e) => setInstrumentSearch(e.target.value)}
                                                    className="pl-10"
                                                />
                                            </div>

                                            {/* Selection and Results Info */}
                                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                                                <span>
                                                    {instrumentSearch
                                                        ? `Βρέθηκαν ${filteredInstruments.length} από ${instruments.length} όργανα`
                                                        : `Σύνολο ${instruments.length} όργανα`
                                                    }
                                                </span>
                                                <span>
                                                    {selectedInstruments.length > 0 && `${selectedInstruments.length} επιλεγμένα`}
                                                </span>
                                            </div>

                                            {/* Instruments Table */}
                                            <div className="border rounded-lg overflow-hidden">
                                                <div className="max-h-96 overflow-y-auto">
                                                    <Table>
                                                        <TableHeader className="sticky top-0 bg-muted">
                                                            <TableRow>
                                                                <TableHead className="w-12">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={selectedInstruments.length === filteredInstruments.length && filteredInstruments.length > 0}
                                                                        onChange={handleSelectAll}
                                                                        className="rounded border-gray-300"
                                                                    />
                                                                </TableHead>
                                                                <TableHead>Μάρκα</TableHead>
                                                                <TableHead>Τύπος Οργάνου</TableHead>
                                                                <TableHead>Barcode</TableHead>
                                                            </TableRow>
                                                        </TableHeader>
                                                        <TableBody>
                                                            {filteredInstruments.length > 0 ? (
                                                                filteredInstruments.map((inst) => (
                                                                    <TableRow
                                                                        key={inst.id}
                                                                        className={`cursor-pointer hover:bg-muted/50 transition-colors ${selectedInstruments.some(item => item.id === inst.id)
                                                                            ? 'bg-primary/10 border-primary'
                                                                            : ''
                                                                            }`}
                                                                        onClick={() => handleInstrumentToggle(inst)}
                                                                    >
                                                                        <TableCell onClick={(e) => e.stopPropagation()}>
                                                                            <input
                                                                                type="checkbox"
                                                                                checked={selectedInstruments.some(item => item.id === inst.id)}
                                                                                onChange={() => handleInstrumentToggle(inst)}
                                                                                className="rounded border-gray-300"
                                                                            />
                                                                        </TableCell>
                                                                        <TableCell className="font-medium">{inst.brand}</TableCell>
                                                                        <TableCell>{inst.instrumentType}</TableCell>
                                                                        <TableCell className="font-mono text-sm">{inst.barcode}</TableCell>
                                                                    </TableRow>
                                                                ))
                                                            ) : instrumentSearch ? (
                                                                <TableRow>
                                                                    <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                                                                        Δεν βρέθηκαν όργανα για "{instrumentSearch}"
                                                                    </TableCell>
                                                                </TableRow>
                                                            ) : instruments.length === 0 ? (
                                                                <TableRow>
                                                                    <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                                                                        <Loader2 className="h-4 w-4 animate-spin mx-auto mb-2" />
                                                                        Φόρτωση οργάνων...
                                                                    </TableCell>
                                                                </TableRow>
                                                            ) : (
                                                                <TableRow>
                                                                    <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                                                                        Δεν υπάρχουν διαθέσιμα όργανα
                                                                    </TableCell>
                                                                </TableRow>
                                                            )}
                                                        </TableBody>
                                                    </Table>
                                                </div>
                                            </div>

                                            {/* Selected Instruments Preview */}
                                            {selectedInstruments.length > 0 && (
                                                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h4 className="font-medium text-primary">
                                                            Επιλεγμένα Όργανα ({selectedInstruments.length}):
                                                        </h4>
                                                        <RippleButton
                                                            size="sm"
                                                            variant="outline"
                                                            onClick={clearSelections}
                                                            className="text-xs"
                                                        >
                                                            Καθαρισμός Όλων
                                                        </RippleButton>
                                                    </div>
                                                    <div className="max-h-32 overflow-y-auto space-y-2">
                                                        {selectedInstruments.map((inst, index) => (
                                                            <div key={inst.id} className="text-sm bg-white rounded p-2 border">
                                                                <div className="flex items-center justify-between">
                                                                    <span>
                                                                        <span className="font-medium">{inst.brand}</span> - {inst.instrumentType}
                                                                    </span>
                                                                    <span className="text-xs text-muted-foreground font-mono">
                                                                        {inst.barcode}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>

                            <RippleButton
                                onClick={handleAssignInstrument}
                                disabled={selectedInstruments.length === 0 || instruments.length === 0}
                                className="w-full"
                            >
                                Χρέωση {selectedInstruments.length > 0 ? `${selectedInstruments.length} Οργάνων` : 'Οργάνων'} στον Μαθητή
                            </RippleButton>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentProfilePage;

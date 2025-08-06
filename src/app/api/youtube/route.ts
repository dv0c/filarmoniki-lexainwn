import { NextRequest, NextResponse } from "next/server";
import Parser from "rss-parser";
    
const parser = new Parser();

export async function GET(request: NextRequest) {
  const channelId = "UC7FwKnm2R4fmm7fPzHaTzHQ";
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
  try {
    const feed = await parser.parseURL(feedUrl);
    return NextResponse.json({ feed });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

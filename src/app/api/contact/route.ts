import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing required fields',
        },
        { status: 400 }
      );
    }

    // TODO: Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with email service (SendGrid, Mailgun, etc.)
    // 4. Send confirmation email to user
    console.log('Contact Submission:', body);

    // For now, return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Message received successfully',
        data: body,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    // Handle unexpected errors
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    );
  }
}

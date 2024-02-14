export async function GET(request: Request) {
    return Response.json({
        app: 'yousee_vendor_app',
        version: '1.0.1'
    }, {
        status: 400
    })
}
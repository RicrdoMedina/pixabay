import Services from "@/lib/services";

const API_URL = process.env.SERVER_API_URL!;
const API_KEY = process.env.PIXABAY_API_KEY!;

export async function GET(request: Request) {
  if (!API_URL || !API_KEY) {
    return Response.json({ message: "Error: API_URL o API_KEY no definidos." }, { status: 500 });
  }

  const { searchParams } = new URL(request.url);
  const tag = searchParams.get("tag");

  try {
    const url = tag
      ? `${API_URL}?key=${API_KEY}&q=${tag}&image_type=photo`
      : `${API_URL}?key=${API_KEY}&image_type=photo`;

    const response = await Services.get(url,null);

    return Response.json({ message: "Success", data: response.data });
  } catch (error) {
    return Response.json({ message: "Error:", error }, { status: 500 });
  }
}

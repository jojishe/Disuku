const baseUrl = "https://twilight-surf-cb06.songnianchen-work.workers.dev/";

const fetchGet = async (endpoint: string): Promise<any> => {
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log(response);

    return await response.json();
  } catch (error) {
    console.error("Fetch GET error:", error);
    throw error;
  }
};

const fetchPost = async (endpoint: string, data: any): Promise<any> => {
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch POST error:", error);
    throw error;
  }
};

export { fetchGet, fetchPost };

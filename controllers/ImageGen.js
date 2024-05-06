exports.GenerateLogo = async (req, res) => {
    const apiUrl = 'https://api.limewire.com/api/image/generation';
    const apiKey = 'lmwr_sk_6FGKIDBZsZ_yNIUcqCDnP8K4J1gmuyUSVbPH3hoWje3XYmgK';
   // dd15a51a-1f04-4d69-a62f-b241291e3b17
  
    try {
      const apiResponse = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Version': 'v1',
          Accept: 'application/json',
          Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify(req.body)
      });
  
      const data = await apiResponse.json();
      
      if (data.data && data.data.length > 0) {
        res.json({ imageUrl: data.data[0].asset_url });
      } else {
        console.error('No assets found in response:', data);
        res.status(500).json({ error: 'No assets found in API response' });
      }
    } catch (error) {
      console.error('Error fetching image:', error);
      res.status(500).json({ error: 'Failed to generate image' });
    }
  }
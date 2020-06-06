export const fetchData =  async () => {
      try {
          const response = await fetch("https://test.rolo.chat/me");
          const data = await response.json();
          return data;
      
      } catch (e){
           console.log(e)
      }
}

export const getConversationsFetch = async () => {
      const token = localStorage.token;
     
      if (token) {
        try {
          const response = await fetch("https://test.rolo.chat/conversations?page=1&limit=15", {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              'Authorization': `Bearer ${token}`
            }
          })
          const data = await response.json();
          return data;
        }catch (e){
          console.log(e)
     }
      }
  }







export const fetchData =  async () => {
      try {
          const response = await fetch("https://test.rolo.chat/me");
          const data = await response.json();
          return data;
      
      } catch (e){
           console.log(e)
      }
}



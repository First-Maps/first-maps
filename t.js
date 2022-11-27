// create a function that returns a random url with native video from array. 
function returnNativeVideo(){
    let urls = [
      `https://www.youtube.com/watch?v=xC9-BzMXKIc&list=PLf1Yqmw3pNBJNQg8ppOiFdGoPySu8hHv8&index=3`,
      `https://www.youtube.com/watch?v=384yiGrfSzk&list=PLf1Yqmw3pNBJNQg8ppOiFdGoPySu8hHv8&index=2`,
      `https://www.youtube.com/watch?v=wWr7-mwKO5o&list=PLf1Yqmw3pNBJNQg8ppOiFdGoPySu8hHv8&index=5`,
      `https://www.youtube.com/watch?v=PPZUmnLyu90&list=PLf1Yqmw3pNBJNQg8ppOiFdGoPySu8hHv8&index=7`,
      `https://www.youtube.com/watch?v=wr969bFZXMo&list=PLf1Yqmw3pNBJNQg8ppOiFdGoPySu8hHv8&index=9`,
      `https://www.youtube.com/watch?v=ymtAFoGUlAk&list=PLf1Yqmw3pNBJNQg8ppOiFdGoPySu8hHv8&index=12`,
      `https://www.youtube.com/watch?v=8Aw1eDvXCJ8&list=PLf1Yqmw3pNBLbrLPa6nUDuj4G_Z_BjNJG`,
      `https://www.youtube.com/watch?v=BzOiZGn20tw&list=PLf1Yqmw3pNBLbrLPa6nUDuj4G_Z_BjNJG&index=3`,
      `https://www.youtube.com/watch?v=1a_jYESbnUY`,
      `https://www.youtube.com/watch?v=Zp3m7DFUSWc`,
      `https://www.youtube.com/watch?v=01VckelPxfo`,
      `https://www.youtube.com/watch?v=iPGAbctSHuY`,
      `https://www.youtube.com/watch?v=NUSwXbz7CtE`,
      `https://www.youtube.com/watch?v=8FVOpaS4ngw`,
      `https://www.youtube.com/watch?v=0m_5qVh__M0`,
      `https://www.youtube.com/watch?v=Ef4unX9UKVk`,
      `https://www.youtube.com/watch?v=6pFN3Tl9dSo&list=PL_MQe_0PiW3_kAz8LusGDNb2tKJwx6f6P`,
      `https://www.youtube.com/watch?v=ycHithCkAps&list=PL_MQe_0PiW3_kAz8LusGDNb2tKJwx6f6P&index=2`
    ]

    let randomIndex = Math.floor(Math.random() * urls.length)
    console.log(randomIndex)
  }

  
  
  
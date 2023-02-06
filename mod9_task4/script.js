/*  */
 
 // Ищем ноду для вставки результата запроса
 const resultNode = document.querySelector('.j-result');
 // Ищем кнопку, по нажатии на которую будет запрос
 const btnNode = document.querySelector('.j-btn-request');

// 
 async function useRequest()  {
     
   let cnt1 =1 * document.getElementById('input1').value;
   let cnt2 =1 * document.getElementById('input2').value;
  
   if (!isFinite(cnt2) || !isFinite(cnt1) || cnt1 < 100 || cnt1 >300 || cnt2 < 100 || cnt2 >300){
      console.log('Wrong number!');
      resultNode.innerHTML =`Одно из чисел не в диапазоне 100-300!`
      return;
        } else {
           url=`https://picsum.photos/${cnt1}/${cnt2}/`;         
           console.log(url);

    let response =  await fetch(url)
    if (!response.ok) {
      console.log('error ',response.status)
    } else{
      //console.log(response);
      
      let picUrl = response.url
      let pic=`<div class="card">
          <img
            src="${picUrl}"
            class="card-image"
          />
        </div>`
      
      console.log('res',picUrl)
       resultNode.innerHTML = pic;
      }
   
    }
 }
btnNode.addEventListener('click', async () => {
  console.log('start');
  
  requestResult = await useRequest();

  console.log('end');
});


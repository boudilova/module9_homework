/*  */
 
 // Ищем ноду для вставки результата запроса
 const resultNode = document.querySelector('.j-result');
 // Ищем кнопку, по нажатии на которую будет запрос
 const btnNode = document.querySelector('.j-btn-request');


// 
 async function useRequest()  {
     
   let cnt1 =1 * document.getElementById('input1').value;
   let cnt2 =1 * document.getElementById('input2').value;
   let str  = valuesCheck(cnt1,cnt2);
   
   if ( str != undefined){
     console.log('Wrong number!');
      resultNode.innerHTML = str;
      return;
        } else {
           url=`https://picsum.photos/v2/list?page=${cnt1}&limit=${cnt2}`;         
           console.log(url);
    
    //console.log(url);
    let response =  await fetch(url)
      .then(response => response.json())
      .then(data => 
            //console.log(data)
            displayResult(data));
  }
 };

function displayResult(apiData) {
    let cards = '';
    // console.log('start cards', cards);
    
    apiData.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
      cards = cards + cardBlock;
    });
    
      
    resultNode.innerHTML = cards;
  }

function valuesCheck(cnt1,cnt2){
  let res = undefined
if ((!isFinite(cnt2) || cnt2 < 1 || cnt2 >10) && (!isFinite(cnt1) || cnt1 < 1 || cnt1 >10)) {
   res='Номер страницы и лимит не в диапазоне 1-10!'
   
} else{
  if (!isFinite(cnt2) || cnt2 < 1 || cnt2 >10) {
    res= 'Номер страницы не в диапазоне 1-10!'
  }
  if (!isFinite(cnt1) || cnt1 < 1 || cnt1 >10) {
    res='Лимит не в диапазоне 1-10!'
  }
}
 return res;
}

btnNode.addEventListener('click', async () => {
  console.log('start');
  requestResult = await useRequest();
  console.log('end');
});


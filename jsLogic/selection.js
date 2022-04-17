async function selection(){
    console.log('In selection()');
    const arr = document.querySelectorAll(".bar");
    for(let i = 0; i < arr.length; i++){
        console.log('In ith loop');
        let min_index = i;
        arr[i].style.background = 'blue';
        for(let j = i+1; j < arr.length; j++){
            console.log('In jth loop');
            arr[j].style.background = 'red';

            await waitforme(delay);
            if(parseInt(arr[j].style.height) < parseInt(arr[min_index].style.height)){
                console.log('In if condition height comparision');
                if(min_index !== i){
                    
                    arr[min_index].style.background = 'cyan';
                }
                min_index = j;
            } 
            else{
                
                arr[j].style.background = 'cyan';
            }   
        }
        await waitforme(delay);
        swap(arr[min_index], arr[i]);
        arr[min_index].style.background = 'cyan';
        arr[i].style.background = 'green';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
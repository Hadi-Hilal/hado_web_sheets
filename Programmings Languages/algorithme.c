
               // algorithmes using C CHEAT SHEET LANGAUGE
               // ========================================

// 1- linear search algorithem 
//============================
int linear_search (int arr[] , int n , int length){
    for(int i = 0 ; i < length ; i++){
        if ( arr[i] == n){
            return 1;
        }
    }
    return 0 ;
}

// 1- binary search algorithem 
//============================
int binary_search(int arr[] , int n , int length){
    int start = 0 ;
    int end = length -1 ;
    int middle ;
    while (end > start)
    {
        middle =(start + end) / 2;
        if(arr[n] == middle){
            return middle;
        }else if(arr[n] > middle){
            start = middle + 1;
        }else{
          end = middle - 1;
        }
    }
    return 0 ;
}
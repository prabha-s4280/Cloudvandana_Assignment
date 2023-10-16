import java.util.Arrays;
import java.util.Random;
class task_1{
    static void shuffle_function(int[]arr){
        int n=arr.length;
        Random rand=new Random();
        for(int i=n-1;i>0;i--){
            int j=rand.nextInt(i+1);
            int temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
    public static void main(String args[]){
        int[]arr={1,2,3,4,5,6,7};
        shuffle_function(arr);
        System.out.println(Arrays.toString(arr));
    }
}
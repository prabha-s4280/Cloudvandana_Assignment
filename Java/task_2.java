import java.util.HashMap;
import java.util.Scanner;
public class task_2 {
    static int romanTOInteger(String str){
        HashMap<Character,Integer>hmap=new HashMap<>();
        hmap.put('I',1);
        hmap.put('V',5);
        hmap.put('X',10);
        hmap.put('L',50);
        hmap.put('C',100);
        hmap.put('D',500);
        hmap.put('M',1000);

        int res=0;
        int val=0;
        for(int i=str.length()-1;i>=0; i--){
            char ch=str.charAt(i);
            int pres_val=hmap.get(ch);
            if(pres_val<val){
                res-=pres_val;
            }
            else{
                res+=pres_val;
            }
            val=pres_val;

        }
        return res;
    }

    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        String str=sc.nextLine().toUpperCase();
        int result=romanTOInteger(str);
        System.out.println(result);
    }
}


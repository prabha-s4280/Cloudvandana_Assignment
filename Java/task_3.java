import java.util.HashSet;
import java.util.Scanner;

public class task_3 {
    static int isPangram(String sent){
        HashSet<Character>hset=new HashSet<>();
        sent=sent.toLowerCase();
        for(char c:sent.toCharArray()){
            if(Character.isLetter(c)){
                hset.add(c);
            }
        }
        return hset.size();
    }
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        String sentence=sc.nextLine();
        int noOfCharacters=isPangram(sentence);
        if(noOfCharacters==26){
            System.out.println("The given sentence is Pangram");
        }
        else{
            System.out.println("The given sentence is not a Pangram");
        }
    } 
}

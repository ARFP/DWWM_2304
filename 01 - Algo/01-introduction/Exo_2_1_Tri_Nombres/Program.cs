namespace Exo_2_1_Tri_Nombres
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int a;
            int b;

            Console.WriteLine("Saisissez un premier nombre entier : ");
            a = int.Parse(Console.ReadLine());

            Console.WriteLine("Saisissez un second nombre entier : ");
            b = int.Parse(Console.ReadLine());

            string resultat;

            if (b < a)
            {
                resultat = b + " - " + a;
                Console.WriteLine(b + " - "+ a);
            }
            else
            {
                resultat = a + " - " + b;
                Console.WriteLine(a + " - " + b);
            }

           
            
            
            resultat = (b < a ? b + "-" + a : a + "-" + b);


            bool res = a < b ? true : false;

            if(a < b)
            {
                res = true;
            }
            else
            {
                res = false;
            }

            Console.WriteLine("Avez vous faim ? (Y/n)");

            res = a < b;

            res = Console.ReadLine() == "oui";

            res = bool.Parse(Console.ReadLine());

        }
    }
}
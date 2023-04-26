namespace Demo_01_Variables
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            Console.WriteLine("Variables et typage statique");

            byte AAA; // entier 8 bits 
            short AA; // entier 16 bits
            ushort AA2;
           // int A; // Entier 32bits (-2147000000 --> 2147000000)
            uint A2; // entier 32bits non signé (0 à 4.294000000)
            long B; // Entier 64bits 
            ulong B2;
            float C;
            double D;



            int A;
            bool saisieOk = false;
            int result;

            string saisie = "23";

            do
            {
                Console.WriteLine("Saisissez un nombre");
                saisie = Console.ReadLine();
                
            }
            while (!int.TryParse(saisie, out result));

          /*  do
            {
                Console.WriteLine("Saisissez un nombre");
                saisie = Console.ReadLine();
                saisieOk = int.TryParse(saisie, out result);
            }
            while (!saisieOk);*/

            Console.WriteLine(result);

            Console.Read();

        }
    }
} 
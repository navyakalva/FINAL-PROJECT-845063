using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AccountService
{
    public class Token
    {
        public  int sid { get; set; }
        public int bid{ get; set; }
        public string token;
        public string msg;
        internal string message;
    }
}

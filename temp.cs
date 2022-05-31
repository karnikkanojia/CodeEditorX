using System;
using System.Collections.Genric;

namespace Testing {
    class Something {
        private int count = 0;
        private Dictionary<int, char> hash_table = null;

        public Something() {
            hash_table = new Dictionary<int, char> ();
        }

        public Something(char[] data) {
            count = data.Length;
            hash_table = new Dictionary<int, char> (data.Length);

            for(int i=0; i<count; i++){
                hash_table.Add(i, data[i]);
            }
        }

        public static void DeepCopy(Something source, ref Something dest) {
            dest = new Something();
            dest.count = source.count;

            while(source.count > 0) {
                dest.hash_table.Add(source.count, source.hash_table[source.count]);
                source.count--;
            }
        }

        public static void Main(){
            Something a1 = new Something(new char[]{'a', 'b', 'c'});
            Something a2 = null;

            Something.DeepCopy(a1, ref a2);
        }
    }
}

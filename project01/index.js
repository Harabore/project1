<script>
 
    function decodeString(s)
    {
        let st = [];
        for (let i = 0; i < s.length; i++)
        {
         
            // When ']' is encountered, we need to start
            // decoding
            if (s[i] == ']') {
                let temp = "";
                while (st.length > 0 && st[st.length - 1] != '[')
                {
                 
                    // st.top() + temp makes sure that the
                    // string won't be in reverse order eg, if
                    // the stack contains 12[abc temp = c + "" =>
                    // temp = b + "c" => temp = a + "bc"
                    temp = st[st.length - 1] + temp;
                    st.pop();
                }
                 
                // remove the '[' from the stack
                st.pop();
                let num = "";
                 
                // remove the digits from the stack
                while (st.length > 0 && st[st.length - 1].charCodeAt() >= 48 && st[st.length - 1].charCodeAt() <= 57) {
                    num = st[st.length - 1] + num;
                    st.pop();
                }
                let number = parseInt(num);
                let repeat = "";
                for (let j = 0; j < number; j++)
                    repeat += temp;
                for (let c = 0; c < repeat.length; c++)
                    st.push(repeat);
            }
             
            // if s[i] is not ']', simply push s[i] to the stack
            else
                st.push(s[i]);
        }
        let res = "";
        while (st.length > 0) {
            res =  st[st.length - 1] + res;
            st.pop();
        }
        return res;
    }
     
    let str = "3[b2[ca]]";
    document.write(decodeString(str));
 
// This code is contributed by divyesh072019.
</script>
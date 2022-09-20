class Solution {
    public boolean isValid(String s) {

        Stack<Character> stack = new Stack<Character>();
        
        for (int i = 0; i < s.length(); i++) {
            char bracket = s.charAt(i);
            
            // checking for opening brackets and adding proper closing bracket to stack.
            switch(bracket) {
                case '(':
                    stack.push(')');
                    break;
                case '[':
                    stack.push(']');
                    break;
                case '{':
                    stack.push('}');
                    break;
                // check if its a closing bracket and compare to the one at the top of the stack
                case ')':
                case ']':
                case '}':
                    // if its a closing bracket but the stack is empty, return false.
                    if ( stack.empty() ){
                        return false;
                    } else {
                        // if it's a closing bracket and does not match the char at the top of the stack, return false
                        if ( bracket == stack.peek() ) {
                            stack.pop();
                        } else {
                            return false;
                        }
                    }
                default:
            }
            
        }
        
        if ( stack.empty() ) {
            return true;
        } else {
            return false;
        }
        
    }
}
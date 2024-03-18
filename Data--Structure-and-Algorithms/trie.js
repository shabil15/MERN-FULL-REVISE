class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
        this.endSymbol = "*"; // Symbol to mark the end of a word
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {        
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            // to travers the next node
            node = node.children[char];
           
        }
        node.isEnd = true;
    }

    // searching 
    contains(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEnd;
    }

    // === prefix chekking ====
    startWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
          if (!node.children[char]) {
            return false;
          }
          node = node.children[char];
        }
        return true;
      }

    populateSuffixTree(word) {
        for (let i = 0; i < word.length; i++) {
            this.insert(word.substring(i));
        }
    }

    countwords() {
        return this.countwordsHelper(this.root);
      }

      countwordsHelper(node) {
        node = this.root
        if (!node) return 0;
        let count = node.endOFWord ? 1 : 0;
        for (let child in node.children) {
          count += this.countwordsHelper(node.children[child]);
        }
        return count;
      }

      autocomplete(prefix) {
        let node = this.root;
        for (let char of prefix) {
          if (node.children[char]) {
            node = node.children[char];
          } else {
            return [];
          }
        }
        return this.autocompleteHelper(node, prefix);
      }
      autocompleteHelper(node, prefix) {
        if (!node) {
          return;
        }
        let result = [];
        if (node.isEnd) {
          result.push(prefix);
        }
        for (let char in node.children) {
          result = result.concat(
            this.autocompleteHelper(node.children[char], prefix + char)
          );
        }
        return result;
      }
    

}

// Example Usage:
const trie = new Trie();
// trie.populateSuffixTree('sanu')
trie.insert("apple");
// trie.insert("app");
// trie.insert("banana");
console.log(trie);
trie.populateSuffixTree('saip')
// console.log(trie.contains("saip")); 
console.log(trie);
// true
console.log(trie.contains("sanu")); 
// false
// console.log(trie.contains("banana"));
 // true

// trie.populateSuffixTree("banana");

// console.log(trie.contains("nan")); 
// true
// console.log(trie.contains("a"));
// true
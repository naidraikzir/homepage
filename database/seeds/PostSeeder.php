<?php

use Illuminate\Database\Seeder;

use App\Post;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	Post::create([
    		'title' => 'Markdown',
    		'content' => '## Headings

# H1
## H2
### H3
#### H4
##### H5
###### H6

---
## Emphasis

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

---
## Lists

1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don&#039;t matter, just that it&#039;s a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we&#039;ll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

---
Links

[I&#039;m an inline-style link](https://www.google.com)

[I&#039;m an inline-style link with title](https://www.google.com &quot;Google&#039;s Homepage&quot;)

[I&#039;m a reference-style link][Arbitrary case-insensitive reference text]

[I&#039;m a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or &lt;http://www.example.com&gt; and sometimes 
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

---
## Images

Here&#039;s our logo (hover to see the title text):

Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png &quot;Logo Title Text 1&quot;)

Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png &quot;Logo Title Text 2&quot;

---
## Code

Inline `code` has `back-ticks around` it.

```javascript
var s = &quot;JavaScript syntax highlighting&quot;;
alert(s);
```
 
```python
s = &quot;Python syntax highlighting&quot;
print s
```
 
```
No language indicated, so no syntax highlighting. 
But let&#039;s throw in a &lt;b&gt;tag&lt;/b&gt;.
```

---
## Tables

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don&#039;t need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

---
## Blockquotes

&gt; Blockquotes are very handy in email to emulate reply text.
&gt; This line is part of the same quote.

Quote break.

&gt; This is a very long line that will still be quoted properly when it wraps. Oh boy let&#039;s keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.

---
## Inline Html

&lt;dl&gt;
  &lt;dt&gt;Definition list&lt;/dt&gt;
  &lt;dd&gt;Is something people use sometimes.&lt;/dd&gt;

  &lt;dt&gt;Markdown in HTML&lt;/dt&gt;
  &lt;dd&gt;Does *not* work **very** well. Use HTML &lt;em&gt;tags&lt;/em&gt;.&lt;/dd&gt;
&lt;/dl&gt;

---
## Horizontal Rule

Three or more...

---

Hyphens

***

Asterisks

___

Underscores',
			'status' => 2,
			'category_id' => 1
    	]);
    }
}

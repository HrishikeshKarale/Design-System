<template>
    <div class='navCSharpBestPractices'>
        https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/inside-a-program/coding-conventions

        <h1>C# Coding Conventions (C# Programming Guide)</h1>

        <nav>
            <h3>In this article</h3>
            <ol>
                <li><a href= "#naming-conventions">Naming Conventions</a></li>
                <li><a href= "#layout-conventions">Layout Conventions</a></li>
                <li><a href= "#commenting-conventions">Commenting Conventions</a></li>
                <li><a href= "#language-guidelines">Language Guidelines</a></li>
                <li><a href= "#security">Security</a></li>
                <li><a href= "#see-also">See also</a></li>
            </ol>
        </nav>

        <!-- <content> -->

        <p>Coding conventions serve the following purposes:</p>
        <ul>
            <li>
                <p>They create a consistent look to the code, so that readers can focus on content, not layout.</p>
            </li>
            <li>
                <p>They enable readers to understand the code more quickly by making assumptions based on previous experience.</p>
            </li>
            <li>
                <p>They facilitate copying, changing, and maintaining the code.</p>
            </li>
            <li>
                <p>They demonstrate C# best practices.</p>
            </li>
        </ul>
        <p>The guidelines in this topic are used by Microsoft to develop samples and documentation.</p>
        <h2 id= "naming-conventions">Naming Conventions<a href= "#naming-conventions" aria-labelledby= "naming-conventions"></a></h2>
        <ul>
            <li>
                <p>In short examples that do not include <a href= "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using-directive">using directives</a>, use namespace qualifications. If you know that a namespace is imported by default in a project, you do not have to fully qualify the names from that namespace. Qualified names can be broken after a dot (.) if they are too long for a single line, as shown in the following example.</p>
                <div>
                    <span>C#</span>
                    <button><span>Copy</span></button>
                </div>
                    <pre ><code><span>var</span> currentPerformanceCounterCategory = <span>new</span> System.Diagnostics.
                    PerformanceCounterCategory();
                </code></pre>
                </li>
                <li>
                    <p>You do not have to change the names of objects that were created by using the Visual Studio designer tools to make them fit other guidelines.</p>
                </li>
        </ul>
        <h2 id= "layout-conventions">Layout Conventions<a href= "#layout-conventions" aria-labelledby= "layout-conventions"></a></h2>
        <p>Good layout uses formatting to emphasize the structure of your code and to make the code easier to read. Microsoft examples and samples conform to the following conventions:</p>
        <ul>
            <li>
                <p>Use the default Code Editor settings (smart indenting, four-character indents, tabs saved as spaces). For more information, see <a href= "https://docs.microsoft.com/en-us/visualstudio/ide/reference/options-text-editor-csharp-formatting?view=vs-2019">Options, Text Editor, C#, Formatting</a>.</p>
            </li>
            <li>
                <p>Write only one statement per line.</p>
            </li>
            <li>
                <p>Write only one declaration per line.</p>
            </li>
            <li>
                <p>If continuation lines are not indented automatically, indent them one tab stop (four spaces).</p>
            </li>
            <li>
                <p>Add at least one blank line between method definitions and property definitions.</p>
            </li>
            <li>
                <p>Use parentheses to make clauses in an expression apparent, as shown in the following code.</p>
                <div><span>C#</span>
                    <button>

            <span></span>

            <span>Copy</span>

            </button></div>
                        <pre ><code name= "csProgGuideCodingConventions#2" data-author-content= "if ((val1 > val2) &amp;&amp; (val1 > val3))
            {
                // Take appropriate action.
            }
            "><span>if</span> ((val1 &gt; val2) &amp;&amp; (val1 &gt; val3))
            {
                <span class= "hljs-comment">// Take appropriate action.</span>
            }
            </code></pre>
            </li>
        </ul>
        <h2 id= "commenting-conventions">Commenting Conventions<a href= "#commenting-conventions" aria-labelledby= "commenting-conventions"></a></h2>
        <ul>
            <li>
                <p>Place the comment on a separate line, not at the end of a line of code.</p>
            </li>
            <li>
                <p>Begin comment text with an uppercase letter.</p>
            </li>
            <li>
                <p>End comment text with a period.</p>
            </li>
            <li>
                <p>Insert one space between the comment delimiter (//) and the comment text, as shown in the following example.</p>
                <div id= "code-try-2"><span>C#</span>
                    <button>

            <span></span>

            <span>Copy</span>

            </button></div>
                        <pre ><code><span class= "hljs-comment">// The following declaration creates a query. It does not run</span>
            <span class= "hljs-comment">// the query.</span>
            </code></pre>
                    </li>
                    <li>
                        <p>Do not create formatted blocks of asterisks around comments.</p>
                    </li>
        </ul>
        <h2 id= "language-guidelines">Language Guidelines<a href= "#language-guidelines" aria-labelledby= "language-guidelines"></a></h2>
        <p>The following sections describe practices that the C# team follows to prepare code examples and samples.</p>
        <h3 id= "string-data-type">String Data Type<a href= "#string-data-type" aria-labelledby= "string-data-type"></a></h3>
        <ul>
            <li>
                <p>Use <a href= "../../language-reference/tokens/interpolated" data-linktype= "relative-path">string interpolation</a> to concatenate short strings, as shown in the following code.</p>
                <div><span>C#</span>
                    <button>

            <span></span>

            <span>Copy</span>

            </button></div>
                        <pre><code name= "csProgGuideCodingConventions#6" data-author-content= "string displayName = <template>">
                <div class='navCSharpBestPractices'>
                https://www.altexsoft.com/blog/business/25-scrum-process-best-practices-that-set-your-agile-workflow-for-efficiency/

            <h1 sourcefile= "docs/csharp/programming-guide/inside-a-program/coding-conventions.md" sourcestartlinenumber= "11">C# Coding Conventions (C# Programming Guide)</h1>

    <nav>

    <h3>In this article</h3>

    <ol><li><a href= "#naming-conventions">Naming Conventions</a></li><li><a href= "#layout-conventions">Layout Conventions</a></li><li><a href= "#commenting-conventions">Commenting Conventions</a></li><li><a href= "#language-guidelines">Language Guidelines</a></li><li><a href= "#security">Security</a></li><li><a href= "#see-also">See also</a></li></ol></nav>

    <!-- <content> -->

    <p>Coding conventions serve the following purposes:</p>
    <ul>
        <li><p>They create a consistent look to the code, so that readers can focus on content, not layout.</p>
        </li>
        <li><p>They enable readers to understand the code more quickly by making assumptions based on previous experience.</p>
        </li>
        <li><p>They facilitate copying, changing, and maintaining the code.</p>
        </li>
        <li><p>They demonstrate C# best practices.</p>
        </li>
    </ul>
    <p>The guidelines in this topic are used by Microsoft to develop samples and documentation.</p>
    <h2 id= "naming-conventions">Naming Conventions<a href= "#naming-conventions" aria-labelledby= "naming-conventions"></a></h2>
    <ul>
        <li><p>In short examples that do not include <a href= "../../language-reference/keywords/using-directive" data-linktype= "relative-path">using directives</a>, use namespace qualifications. If you know that a namespace is imported by default in a project, you do not have to fully qualify the names from that namespace. Qualified names can be broken after a dot (.) if they are too long for a single line, as shown in the following example.</p>
        <div><span>C#</span>

        <button>

        <span></span>

        <span>Copy</span>

        </button></div><pre ><code data-author-content= "var currentPerformanceCounterCategory = new System.Diagnostics.
            PerformanceCounterCategory();
        "><span>var</span> currentPerformanceCounterCategory = <span>new</span> System.Diagnostics.
            PerformanceCounterCategory();
        </code></pre></li>
        <li><p>You do not have to change the names of objects that were created by using the Visual Studio designer tools to make them fit other guidelines.</p>
        </li>
    </ul>
    <h2 id= "layout-conventions">Layout Conventions<a href= "#layout-conventions" aria-labelledby= "layout-conventions"></a></h2>
    <p>Good layout uses formatting to emphasize the structure of your code and to make the code easier to read. Microsoft examples and samples conform to the following conventions:</p>
    <ul>
        <li><p>Use the default Code Editor settings (smart indenting, four-character indents, tabs saved as spaces). For more information, see <a href= "/en-us/visualstudio/ide/reference/options-text-editor-csharp-formatting" data-linktype= "absolute-path">Options, Text Editor, C#, Formatting</a>.</p>
        </li>
        <li><p>Write only one statement per line.</p>
        </li>
        <li><p>Write only one declaration per line.</p>
        </li>
        <li><p>If continuation lines are not indented automatically, indent them one tab stop (four spaces).</p>
        </li>
        <li><p>Add at least one blank line between method definitions and property definitions.</p>
        </li>
        <li><p>Use parentheses to make clauses in an expression apparent, as shown in the following code.</p>
        <div><span>C#</span>

        <button>

        <span></span>

        <span>Copy</span>

        </button></div><pre ><code><span>if</span> ((val1 &gt; val2) &amp;&amp; (val1 &gt; val3))
        {
            <span class= "hljs-comment">// Take appropriate action.</span>
        }
        </code></pre></li>
    </ul>
    <h2 id= "commenting-conventions">Commenting Conventions<a href= "#commenting-conventions" aria-labelledby= "commenting-conventions"></a></h2>
    <ul>
        <li><p>Place the comment on a separate line, not at the end of a line of code.</p>
        </li>
        <li><p>Begin comment text with an uppercase letter.</p>
        </li>
        <li><p>End comment text with a period.</p>
        </li>
        <li><p>Insert one space between the comment delimiter (//) and the comment text, as shown in the following example.</p>
        <div id= "code-try-2"><span>C#</span>

        <button>

        <span></span>

        <span>Copy</span>

        </button></div><pre ><code name= "csProgGuideCodingConventions#3" data-author-content= "// The following declaration creates a query. It does not run
        // the query.
        "><span class= "hljs-comment">// The following declaration creates a query. It does not run</span>
        <span class= "hljs-comment">// the query.</span>
        </code></pre></li>
        <li><p>Do not create formatted blocks of asterisks around comments.</p>
        </li>
    </ul>
    <h2 id= "language-guidelines">Language Guidelines<a href= "#language-guidelines" aria-labelledby= "language-guidelines"></a></h2>
    <p>The following sections describe practices that the C# team follows to prepare code examples and samples.</p>
    <h3 id= "string-data-type">String Data Type<a href= "#string-data-type" aria-labelledby= "string-data-type"></a></h3>
    <ul>
    <li><p>Use <a href= "../../language-reference/tokens/interpolated" data-linktype= "relative-path">string interpolation</a> to concatenate short strings, as shown in the following code.</p>
    <div><span>C#</span>

    <button>

    <span></span>

    <span>Copy</span>

    </button></div><pre ><code name= "csProgGuideCodingConventions#6" data-author-content= "string displayName = $&quot;{nameList[n].LastName}, {nameList[n].FirstName}&quot;;
    "><span>string</span> displayName = <span class= "hljs-string">$"<span class= "hljs-subst">{nameList[n].LastName}</span>, <span class= "hljs-subst">{nameList[n].FirstName}</span>"</span>;
    </code></pre></li>
    <li><p>To append strings in loops, especially when you are working with large amounts of text, use a <a class= "xref" href= "/en-us/dotnet/api/system.text.stringbuilder" data-linktype= "absolute-path">StringBuilder</a> object.</p>
    <div id= "code-try-4"><span>C#</span>

    <button>

    <span></span>

    <span>Copy</span>

    </button></div><pre ><code name= "csProgGuideCodingConventions#7" data-author-content= "var phrase = &quot;lalalalalalalalalalalalalalalalalalalalalalalalalalalalalala&quot;;
    var manyPhrases = new StringBuilder();
    for (var i = 0; i < 10000; i++)
    {
        manyPhrases.Append(phrase);
    }
    //Console.WriteLine(&quot;tra&quot; + manyPhrases);
    "><span>var</span> phrase = <span class= "hljs-string">"lalalalalalalalalalalalalalalalalalalalalalalalalalalalalala"</span>;
    <span>var</span> manyPhrases = <span>new</span> StringBuilder();
    <span>for</span> (<span>var</span> i = <span class= "hljs-number">0</span>; i &lt; <span class= "hljs-number">10000</span>; i++)
    {
        manyPhrases.Append(phrase);
    }
    <span class= "hljs-comment">//Console.WriteLine("tra" + manyPhrases);</span>
    </code></pre></li>
    </ul>
    <h3 id= "implicitly-typed-local-variables">Implicitly Typed Local Variables<a href= "#implicitly-typed-local-variables" aria-labelledby= "implicitly-typed-local-variables"></a></h3>
    <ul>
    <li><p>Use <a href= "../classes-and-structs/implicitly-typed-local-variables" data-linktype= "relative-path">implicit typing</a> for local variables when the type of the variable is obvious from the right side of the assignment, or when the precise type is not important.</p>
    <div id= "code-try-5"><span>C#</span>

    <button>

    <span></span>

    <span>Copy</span>

    </button></div><pre ><code name= "csProgGuideCodingConventions#8" data-author-content= "// When the type of a variable is clear from the context, use var 
    // in the declaration.
    var var1 = &quot;This is clearly a string.&quot;;
    var var2 = 27;
    var var3 = Convert.ToInt32(Console.ReadLine());
    "><span class= "hljs-comment">// When the type of a variable is clear from the context, use var </span>
    <span class= "hljs-comment">// in the declaration.</span>
    <span>var</span> var1 = <span class= "hljs-string">"This is clearly a string."</span>;
    <span>var</span> var2 = <span class= "hljs-number">27</span>;
    <span>var</span> var3 = Convert.ToInt32(Console.ReadLine());
    </code></pre></li>
    <li><p>Do not use <a href= "../../language-reference/keywords/var" data-linktype= "relative-path">var</a> when the type is not apparent from the right side of the assignment.</p>
    <div id= "code-try-6"><span>C#</span>

    <button>

    <span></span>

    <span>Copy</span>

    </button></div><pre ><code name= "csProgGuideCodingConventions#9" data-author-content= "// When the type of a variable is not clear from the context, use an
    // explicit type.
    int var4 = ExampleClass.ResultSoFar();
    "><span class= "hljs-comment">// When the type of a variable is not clear from the context, use an</span>
    <span class= "hljs-comment">// explicit type.</span>
    <span>int</span> var4 = ExampleClass.ResultSoFar();
    </code></pre></li>
    <li><p>Do not rely on the variable name to specify the type of the variable. It might not be correct.</p>
    <div id= "code-try-7"><span>C#</span>

    <button>

    <span></span>

    <span>Copy</span>

    </button></div><pre ><code name= "csProgGuideCodingConventions#10" data-author-content= "// Naming the following variable inputInt is misleading. 
    // It is a string.
    var inputInt = Console.ReadLine();
    Console.WriteLine(inputInt);
    "><span class= "hljs-comment">// Naming the following variable inputInt is misleading. </span>
    <span class= "hljs-comment">// It is a string.</span>
    <span>var</span> inputInt = Console.ReadLine();
    Console.WriteLine(inputInt);
    </code></pre></li>
    <li><p>Avoid the use of <code>var</code> in place of <a href= "../../language-reference/keywords/dynamic" data-linktype= "relative-path">dynamic</a>.</p>
    </li>
    <li><p>Use implicit typing to determine the type of the loop variable in <a href= "../../language-reference/keywords/for" data-linktype= "relative-path">for</a> and <a href= "../../language-reference/keywords/foreach-in" data-linktype= "relative-path">foreach</a> loops.</p>
    <p>The following example uses implicit typing in a <code>for</code> statement.</p>
    <div id= "code-try-8"><span>C#</span>

    <button>

    <span></span>

    <span>Copy</span>

    </button></div><pre ><code name= "csProgGuideCodingConventions#11" data-author-content= "var syllable = &quot;ha&quot;;
    var laugh = &quot;&quot;;
    for (var i = 0; i < 10; i++)
    {
        laugh += syllable;
        Console.WriteLine(laugh);
    }
    "><span>var</span> syllable = <span class= "hljs-string">"ha"</span>;
    <span>var</span> laugh = <span class= "hljs-string">""</span>;
    <span>for</span> (<span>var</span> i = <span class= "hljs-number">0</span>; i &lt; <span class= "hljs-number">10</span>; i++)
    {
        laugh += syllable;
        Console.WriteLine(laugh);
    }
    </code></pre>
    <p>The following example uses implicit typing in a <code>foreach</code> statement.</p>
    <div id= "code-try-9"><span>C#</span>

    <button>

    <span></span>

    <span>Copy</span>

    </button></div><pre ><code name= "csProgGuideCodingConventions#12" data-author-content= "foreach (var ch in laugh)
    {
        if (ch == 'h')
            Console.Write(&quot;H&quot;);
        else
            Console.Write(ch);
    }
    Console.WriteLine();
    "><span>foreach</span> (<span>var</span> ch <span>in</span> laugh)
    {
        <span>if</span> (ch == <span class= "hljs-string">'h'</span>)
            Console.Write(<span class= "hljs-string">"H"</span>);
        <span>else</span>
            Console.Write(ch);
    }
    Console.WriteLine();
    </code></pre></li>
    </ul>
    <h3 id= "unsigned-data-type">Unsigned Data Type<a href= "#unsigned-data-type" aria-labelledby= "unsigned-data-type"></a></h3>
    <ul>
    <li>In general, use <code>int</code> rather than unsigned types. The use of <code>int</code> is common throughout C#, and it is easier to interact with other libraries when you use <code>int</code>.</li>
    </ul>
    <h3 id= "arrays">Arrays<a href= "#arrays" aria-labelledby= "arrays"></a></h3>
    <ul>
    <li><p>Use the concise syntax when you initialize arrays on the declaration line.</p>
    <div id= "code-try-10"><span>C#</span>

    <button>

    <span></span>

    <span>Copy</span>

    </button></div><pre ><code name= "csProgGuideCodingConventions#13" data-author-content= "// Preferred syntax. Note that you cannot use var here instead of string[].
    string[] vowels1 = { &quot;a&quot;, &quot;e&quot;, &quot;i&quot;, &quot;o&quot;, &quot;u&quot; };

    // If you use explicit instantiation, you can use var.
    var vowels2 = new string[] { &quot;a&quot;, &quot;e&quot;, &quot;i&quot;, &quot;o&quot;, &quot;u&quot; };

    // If you specify an array size, you must initialize the elements one at a time.
    var vowels3 = new string[5];
    vowels3[0] = &quot;a&quot;;
    vowels3[1] = &quot;e&quot;;
    // And so on.
    "><span class= "hljs-comment">// Preferred syntax. Note that you cannot use var here instead of string[].</span>
    <span>string</span>[] vowels1 = { <span class= "hljs-string">"a"</span>, <span class= "hljs-string">"e"</span>, <span class= "hljs-string">"i"</span>, <span class= "hljs-string">"o"</span>, <span class= "hljs-string">"u"</span> };

    <span class= "hljs-comment">// If you use explicit instantiation, you can use var.</span>
    <span>var</span> vowels2 = <span>new</span> <span>string</span>[] { <span class= "hljs-string">"a"</span>, <span class= "hljs-string">"e"</span>, <span class= "hljs-string">"i"</span>, <span class= "hljs-string">"o"</span>, <span class= "hljs-string">"u"</span> };

    <span class= "hljs-comment">// If you specify an array size, you must initialize the elements one at a time.</span>
    <span>var</span> vowels3 = <span>new</span> <span>string</span>[<span class= "hljs-number">5</span>];
    vowels3[<span class= "hljs-number">0</span>] = <span class= "hljs-string">"a"</span>;
    vowels3[<span class= "hljs-number">1</span>] = <span class= "hljs-string">"e"</span>;
    <span class= "hljs-comment">// And so on.</span>
    </code></pre></li>
    </ul>
    <h3 id= "delegates">Delegates<a href= "#delegates" aria-labelledby= "delegates"></a></h3>
    <ul>
    <li><p>Use the concise syntax to create instances of a delegate type.</p>
    <div id= "code-try-11"><span>C#</span>

    <button>

    <span></span>

    <span>Copy</span>

    </button></div><pre ><code name= "csProgGuideCodingConventions#14" data-author-content= "// First, in class Program, define the delegate type and a method that  
    // has a matching signature.

    // Define the type.
    public delegate void Del(string message);

    // Define a method that has a matching signature.
    public static void DelMethod(string str)
    {
        Console.WriteLine(&quot;DelMethod argument: {0}&quot;, str);
    }
    "><span class= "hljs-comment">// First, in class Program, define the delegate type and a method that  </span>
    <span class= "hljs-comment">// has a matching signature.</span>

    <span class= "hljs-comment">// Define the type.</span>
    <span class= "hljs-function"><span>public</span> <span>delegate</span> <span>void</span> <span class= "hljs-title">Del</span>(<span class= "hljs-params"><span>string</span> message</span>)</span>;

    <span class= "hljs-comment">// Define a method that has a matching signature.</span>
    <span class= "hljs-function"><span>public</span> <span>static</span> <span>void</span> <span class= "hljs-title">DelMethod</span>(<span class= "hljs-params"><span>string</span> str</span>)
    </span>{
        Console.WriteLine(<span class= "hljs-string">"DelMethod argument: {0}"</span>, str);
    }
    </code></pre><div id= "code-try-12"><span>C#</span>

    <button>

    <span></span>

    <span>Copy</span>

    </button></div><pre ><code name= "csProgGuideCodingConventions#15" data-author-content= "// In the Main method, create an instance of Del.

    // Preferred: Create an instance of Del by using condensed syntax.
    Del exampleDel2 = DelMethod;

    // The following declaration uses the full syntax.
    Del exampleDel1 = new Del(DelMethod);
    "><span class= "hljs-comment">// In the Main method, create an instance of Del.</span>

    <span class= "hljs-comment">// Preferred: Create an instance of Del by using condensed syntax.</span>
    Del exampleDel2 = DelMethod;

    <span class= "hljs-comment">// The following declaration uses the full syntax.</span>
    Del exampleDel1 = <span>new</span> Del(DelMethod);
    </code></pre></li>
    </ul>
    <h3 id= "try-catch-and-using-statements-in-exception-handling">try-catch and using Statements in Exception Handling<a href= "#try-catch-and-using-statements-in-exception-handling" aria-labelledby= "try-catch-and-using-statements-in-exception-handling"></a></h3>
    <ul>
    <li><p>Use a <a href= "../../language-reference/keywords/try-catch" data-linktype= "relative-path">try-catch</a> statement for most exception handling.</p>
    <div id= "code-try-13"><span>C#</span>

    <button>

    <span></span>

    <span>Copy</span>

    </button></div><pre ><code name= "csProgGuideCodingConventions#16" data-author-content= "static string GetValueFromArray(string[] array, int index)
    {
        try
        {
            return array[index];
        }
        catch (System.IndexOutOfRangeException ex)
        {
            Console.WriteLine(&quot;Index is out of range: {0}&quot;, index);
            throw;
        }
    }
    "><span class= "hljs-function"><span>static</span> <span>string</span> <span class= "hljs-title">GetValueFromArray</span>(<span class= "hljs-params"><span>string</span>[] array, <span>int</span> index</span>)
    </span>{
        <span>try</span>
        {
            <span>return</span> array[index];
        }
        <span>catch</span> (System.IndexOutOfRangeException ex)
        {
            Console.WriteLine(<span class= "hljs-string">"Index is out of range: {0}"</span>, index);
            <span>throw</span>;
        }
    }
    </code></pre></li>
    <li><p>Simplify your code by using the C# <a href= "../../language-reference/keywords/using-statement" data-linktype= "relative-path">using statement</a>. If you have a <a href= "../../language-reference/keywords/try-finally" data-linktype= "relative-path">try-finally</a> statement in which the only code in the <code>finally</code> block is a call to the <a class= "xref" href= "/en-us/dotnet/api/system.idisposable.dispose" data-linktype= "absolute-path">Dispose</a> method, use a <code>using</code> statement instead.</p>
    <div id= "code-try-14"><span>C#</span>

    <button>

    <span></span>

    <span>Copy</span>

    </button></div><pre ><code><span class= "hljs-comment">// This try-finally statement only calls Dispose in the finally block.</span>
    Font font1 = <span>new</span> Font(<span class= "hljs-string">"Arial"</span>, <span class= "hljs-number">10.0</span>f);
    <span>try</span>
    {
        <span>byte</span> charset = font1.GdiCharSet;
    }
    <span>finally</span>
    {
        <span>if</span> (font1 != <span class= "hljs-literal">null</span>)
        {
            ((IDisposable)font1).Dispose();
        }
    }

    <span class= "hljs-comment">// You can do the same thing with a using statement.</span>
    <span>using</span> (Font font2 = <span>new</span> Font(<span class= "hljs-string">"Arial"</span>, <span class= "hljs-number">10.0</span>f))
    {
        <span>byte</span> charset = font2.GdiCharSet;
    }
    </code></pre></li>
    </ul>
    <h3 id= "-and--operators">&amp;&amp; and || Operators<a href= "#-and--operators" aria-labelledby= "-and--operators"></a></h3>
    <ul>
    <li><p>To avoid exceptions and increase performance by skipping unnecessary comparisons, use <a href= "../../language-reference/operators/boolean-logical-operators#conditional-logical-and-operator-" data-linktype= "relative-path">&amp;&amp;</a> instead of <a href= "../../language-reference/operators/boolean-logical-operators#logical-and-operator-" data-linktype= "relative-path">&amp;</a> and <a href= "../../language-reference/operators/boolean-logical-operators#conditional-logical-or-operator-" data-linktype= "relative-path">||</a> instead of <a href= "../../language-reference/operators/boolean-logical-operators#logical-or-operator-" data-linktype= "relative-path">|</a> when you perform comparisons, as shown in the following example.</p>
    <div id= "code-try-15"><span>C#</span>

    <button>

    <span></span>

    <span>Copy</span>

    </button></div><pre ><code>Console.Write(<span class= "hljs-string">"Enter a dividend: "</span>);
    <span>var</span> dividend = Convert.ToInt32(Console.ReadLine());

    Console.Write(<span class= "hljs-string">"Enter a divisor: "</span>);
    <span>var</span> divisor = Convert.ToInt32(Console.ReadLine());

    <span class= "hljs-comment">// If the divisor is 0, the second clause in the following condition</span>
    <span class= "hljs-comment">// causes a run-time error. The &amp;&amp; operator short circuits when the</span>
    <span class= "hljs-comment">// first expression is false. That is, it does not evaluate the</span>
    <span class= "hljs-comment">// second expression. The &amp; operator evaluates both, and causes </span>
    <span class= "hljs-comment">// a run-time error when divisor is 0.</span>
    <span>if</span> ((divisor != <span class= "hljs-number">0</span>) &amp;&amp; (dividend / divisor &gt; <span class= "hljs-number">0</span>))
    {
        Console.WriteLine(<span class= "hljs-string">"Quotient: {0}"</span>, dividend / divisor);
    }
    <span>else</span>
    {
        Console.WriteLine(<span class= "hljs-string">"Attempted division by 0 ends up here."</span>);
    }
    </code></pre></li>
    </ul>
    <h3 id= "new-operator">New Operator<a href= "#new-operator" aria-labelledby= "new-operator"></a></h3>
    <ul>
    <li><p>Use the concise form of object instantiation, with implicit typing, as shown in the following declaration.</p>
    <div id= "code-try-16"><span>C#</span>

    <button>

    <span></span>

    <span>Copy</span>

    </button></div><pre ><code><span>var</span> instance1 = <span>new</span> ExampleClass();
    </code></pre>
    <p>The previous line is equivalent to the following declaration.</p>
    <div id= "code-try-17"><span>C#</span>

    <button>

    <span></span>

    <span>Copy</span>

    </button></div><pre ><code>ExampleClass instance2 = <span>new</span> ExampleClass();
    </code></pre></li>
    <li><p>Use object initializers to simplify object creation.</p>
    <div id= "code-try-18"><span>C#</span>

    <button>

    <span></span>

    <span>Copy</span>

    </button></div><pre ><code><span class= "hljs-comment">// Object initializer.</span>
    <span>var</span> instance3 = <span>new</span> ExampleClass { Name = <span class= "hljs-string">"Desktop"</span>, ID = <span class= "hljs-number">37414</span>, 
        Location = <span class= "hljs-string">"Redmond"</span>, Age = <span class= "hljs-number">2.3</span> };

    <span class= "hljs-comment">// Default constructor and assignment statements.</span>
    <span>var</span> instance4 = <span>new</span> ExampleClass();
    instance4.Name = <span class= "hljs-string">"Desktop"</span>;
    instance4.ID = <span class= "hljs-number">37414</span>;
    instance4.Location = <span class= "hljs-string">"Redmond"</span>;
    instance4.Age = <span class= "hljs-number">2.3</span>;
    </code></pre></li>
    </ul>
    <h3 id= "event-handling">Event Handling<a href= "#event-handling" aria-labelledby= "event-handling"></a></h3>
    <ul>
    <li><p>If you are defining an event handler that you do not need to remove later, use a lambda expression.</p>
    <div id= "code-try-19"><span>C#</span>

    <button>

    <span></span>

    <span>Copy</span>

    </button></div><pre ><code><span class= "hljs-function"><span>public</span> <span class= "hljs-title">Form2</span>(<span class= "hljs-params"></span>)
    </span>{
        <span class= "hljs-comment">// You can use a lambda expression to define an event handler.</span>
        <span>this</span>.Click += (s, e) =&gt;
            {
                MessageBox.Show(
                    ((MouseEventArgs)e).Location.ToString());
            };
    }
    </code></pre><div id= "code-try-20"><span>C#</span>

    <button>

    <span></span>

    <span>Copy</span>

    </button></div><pre ><code><span class= "hljs-comment">// Using a lambda expression shortens the following traditional definition.</span>
    <span class= "hljs-function"><span>public</span> <span class= "hljs-title">Form1</span>(<span class= "hljs-params"></span>)
    </span>{
        <span>this</span>.Click += <span>new</span> EventHandler(Form1_Click);
    }

    <span class= "hljs-function"><span>void</span> <span class= "hljs-title">Form1_Click</span>(<span class= "hljs-params"><span>object</span> sender, EventArgs e</span>)
    </span>{
        MessageBox.Show(((MouseEventArgs)e).Location.ToString());
    }
    </code></pre></li>
    </ul>
    <h3 id= "static-members">Static Members<a href= "#static-members" aria-labelledby= "static-members"></a></h3>
    <ul>
    <li>Call <a href= "../../language-reference/keywords/static" data-linktype= "relative-path">static</a> members by using the class name: <em>ClassName.StaticMember</em>. This practice makes code more readable by making static access clear.  Do not qualify a static member defined in a base class with the name of a derived class.  While that code compiles, the code readability is misleading, and the code may break in the future if you add a static member with the same name to the derived class.</li>
    </ul>
    <h3 id= "linq-queries">LINQ Queries<a href= "#linq-queries" aria-labelledby= "linq-queries"></a></h3>
    <ul>
        <li><p>Use meaningful names for query variables. The following example uses <code>seattleCustomers</code> for customers who are located in Seattle.</p>
        <div id= "code-try-21"><span>C#</span>

        <button>

        <span></span>

        <span>Copy</span>

        </button></div><pre ><code><span>var</span> seattleCustomers = <span>from</span> customer <span>in</span> customers
                            <span>where</span> customer.City == <span class= "hljs-string">"Seattle"</span>
                            <span>select</span> customer.Name;
        </code></pre></li>
        <li><p>Use aliases to make sure that property names of anonymous types are correctly capitalized, using Pascal casing.</p>
        <div id= "code-try-22"><span>C#</span>

        <button>

        <span></span>

        <span>Copy</span>

        </button></div><pre ><code><span>var</span> localDistributors =
            <span>from</span> customer <span>in</span> customers
            <span>join</span> distributor <span>in</span> distributors <span>on</span> customer.City <span>equals</span> distributor.City
            <span>select</span> <span>new</span> { Customer = customer, Distributor = distributor };
        </code></pre></li>
        <li><p>Rename properties when the property names in the result would be ambiguous. For example, if your query returns a customer name and a distributor ID, instead of leaving them as <code>Name</code> and <code>ID</code> in the result, rename them to clarify that <code>Name</code> is the name of a customer, and <code>ID</code> is the ID of a distributor.</p>
        <div id= "code-try-23"><span>C#</span>

        <button>

        <span></span>

        <span>Copy</span>

        </button></div><pre ><code><span>var</span> localDistributors2 =
            <span>from</span> customer <span>in</span> customers
            <span>join</span> distributor <span>in</span> distributors <span>on</span> customer.City <span>equals</span> distributor.City
            <span>select</span> <span>new</span> { CustomerName = customer.Name, DistributorID = distributor.ID };
        </code></pre></li>
        <li><p>Use implicit typing in the declaration of query variables and range variables.</p>
        <div id= "code-try-24"><span>C#</span>

        <button>

        <span></span>

        <span>Copy</span>

        </button></div><pre ><code><span>var</span> seattleCustomers = <span>from</span> customer <span>in</span> customers
                            <span>where</span> customer.City == <span class= "hljs-string">"Seattle"</span>
                            <span>select</span> customer.Name;
        </code></pre></li>
        <li><p>Align query clauses under the <a href= "../../language-reference/keywords/from-clause" data-linktype= "relative-path">from</a> clause, as shown in the previous examples.</p>
        </li>
        <li><p>Use <a href= "../../language-reference/keywords/where-clause" data-linktype= "relative-path">where</a> clauses before other query clauses to ensure that later query clauses operate on the reduced, filtered set of data.</p>
        <div id= "code-try-25"><span>C#</span>

        <button>

        <span></span>

        <span>Copy</span>

        </button></div><pre ><code><span>var</span> seattleCustomers2 = <span>from</span> customer <span>in</span> customers
                                <span>where</span> customer.City == <span class= "hljs-string">"Seattle"</span>
                                <span>orderby</span> customer.Name
                                <span>select</span> customer;
        </code></pre></li>
        <li>
            <p>Use multiple <code>from</code> clauses instead of a <a href= "../../language-reference/keywords/join-clause" data-linktype= "relative-path">join</a> clause to access inner collections. For example, a collection of <code>Student</code> objects might each contain a collection of test scores. When the following query is executed, it returns each score that is over 90, along with the last name of the student who received the score.</p>
            <div><span>C#</span>

                <button>
                    <span>Copy</span>
                </button>
            </div>
            <pre >
                <code>
                    <span class= "hljs-comment">// Use a compound from to access the inner sequence within each element.</span>
                    <span>var</span> scoreQuery = <span>from</span> student <span>in</span> students
                                <span>from</span> score <span>in</span> student.Scores
                                <span>where</span> score &gt; <span class= "hljs-number">90</span>
                                <span>select</span> <span>new</span> { Last = student.LastName, score };
                </code>
            </pre>
        </li>
        </ul>
        <h2 id= "security">Security<a href= "#security" aria-labelledby= "security"></a></h2>
        <p>Follow the guidelines in <a href= "../../../standard/security/secure-coding-guidelines" data-linktype= "relative-path">Secure Coding Guidelines</a>.</p>
        <h2 id= "see-also">See also<a href= "#see-also" aria-labelledby= "see-also"></a></h2>
        <ul>
            <li><a href= "../../../visual-basic/programming-guide/program-structure/coding-conventions" data-linktype= "relative-path">Visual Basic Coding Conventions</a></li>
            <li><a href= "../../../standard/security/secure-coding-guidelines" data-linktype= "relative-path">Secure Coding Guidelines</a></li>
        </ul>
        </div>
    <!-- </template> -->
    quot;{nameList[n].LastName}, {nameList[n].FirstName}&quot;;
    "><span>string</span> displayName = <span class= "hljs-string">$"<span class= "hljs-subst">{nameList[n].LastName}</span>, <span class= "hljs-subst">{nameList[n].FirstName}</span>"</span>;
    </code></pre>
            </li>
            <li>
                <p>To append strings in loops, especially when you are working with large amounts of text, use a <a class= "xref" href= "/en-us/dotnet/api/system.text.stringbuilder" data-linktype= "absolute-path">StringBuilder</a> object.</p>
                <div id= "code-try-4"><span>C#</span>
                    <button>

    <span></span>

    <span>Copy</span>

    </button></div>
                <pre ><code name= "csProgGuideCodingConventions#7" data-author-content= "var phrase = &quot;lalalalalalalalalalalalalalalalalalalalalalalalalalalalalala&quot;;
    var manyPhrases = new StringBuilder();
    for (var i = 0; i < 10000; i++)
    {
        manyPhrases.Append(phrase);
    }
    //Console.WriteLine(&quot;tra&quot; + manyPhrases);
    "><span>var</span> phrase = <span class= "hljs-string">"lalalalalalalalalalalalalalalalalalalalalalalalalalalalalala"</span>;
    <span>var</span> manyPhrases = <span>new</span> StringBuilder();
    <span>for</span> (<span>var</span> i = <span class= "hljs-number">0</span>; i &lt; <span class= "hljs-number">10000</span>; i++)
    {
        manyPhrases.Append(phrase);
    }
    <span class= "hljs-comment">//Console.WriteLine("tra" + manyPhrases);</span>
    </code></pre>
            </li>
        </ul>
        <h3 id= "implicitly-typed-local-variables">Implicitly Typed Local Variables<a href= "#implicitly-typed-local-variables" aria-labelledby= "implicitly-typed-local-variables"></a></h3>
        <ul>
            <li>
                <p>Use <a href= "../classes-and-structs/implicitly-typed-local-variables" data-linktype= "relative-path">implicit typing</a> for local variables when the type of the variable is obvious from the right side of the assignment, or when the precise type is not important.</p>
                <div id= "code-try-5"><span>C#</span>
                    <button>

    <span></span>

    <span>Copy</span>

    </button></div>
                <pre ><code name= "csProgGuideCodingConventions#8" data-author-content= "// When the type of a variable is clear from the context, use var 
    // in the declaration.
    var var1 = &quot;This is clearly a string.&quot;;
    var var2 = 27;
    var var3 = Convert.ToInt32(Console.ReadLine());
    "><span class= "hljs-comment">// When the type of a variable is clear from the context, use var </span>
    <span class= "hljs-comment">// in the declaration.</span>
    <span>var</span> var1 = <span class= "hljs-string">"This is clearly a string."</span>;
    <span>var</span> var2 = <span class= "hljs-number">27</span>;
    <span>var</span> var3 = Convert.ToInt32(Console.ReadLine());
    </code></pre>
            </li>
            <li>
                <p>Do not use <a href= "../../language-reference/keywords/var" data-linktype= "relative-path">var</a> when the type is not apparent from the right side of the assignment.</p>
                <div id= "code-try-6"><span>C#</span>
                    <button>

    <span></span>

    <span>Copy</span>

    </button></div>
                <pre ><code name= "csProgGuideCodingConventions#9" data-author-content= "// When the type of a variable is not clear from the context, use an
    // explicit type.
    int var4 = ExampleClass.ResultSoFar();
    "><span class= "hljs-comment">// When the type of a variable is not clear from the context, use an</span>
    <span class= "hljs-comment">// explicit type.</span>
    <span>int</span> var4 = ExampleClass.ResultSoFar();
    </code></pre>
            </li>
            <li>
                <p>Do not rely on the variable name to specify the type of the variable. It might not be correct.</p>
                <div id= "code-try-7"><span>C#</span>
                    <button>

    <span></span>

    <span>Copy</span>

    </button></div>
                <pre ><code name= "csProgGuideCodingConventions#10" data-author-content= "// Naming the following variable inputInt is misleading. 
    // It is a string.
    var inputInt = Console.ReadLine();
    Console.WriteLine(inputInt);
    "><span class= "hljs-comment">// Naming the following variable inputInt is misleading. </span>
    <span class= "hljs-comment">// It is a string.</span>
    <span>var</span> inputInt = Console.ReadLine();
    Console.WriteLine(inputInt);
    </code></pre>
            </li>
            <li>
                <p>Avoid the use of <code>var</code> in place of <a href= "../../language-reference/keywords/dynamic" data-linktype= "relative-path">dynamic</a>.</p>
            </li>
            <li>
                <p>Use implicit typing to determine the type of the loop variable in <a href= "../../language-reference/keywords/for" data-linktype= "relative-path">for</a> and <a href= "../../language-reference/keywords/foreach-in" data-linktype= "relative-path">foreach</a> loops.</p>
                <p>The following example uses implicit typing in a <code>for</code> statement.</p>
                <div id= "code-try-8"><span>C#</span>
                    <button>

    <span></span>

    <span>Copy</span>

    </button></div>
                <pre ><code name= "csProgGuideCodingConventions#11" data-author-content= "var syllable = &quot;ha&quot;;
    var laugh = &quot;&quot;;
    for (var i = 0; i < 10; i++)
    {
        laugh += syllable;
        Console.WriteLine(laugh);
    }
    "><span>var</span> syllable = <span class= "hljs-string">"ha"</span>;
    <span>var</span> laugh = <span class= "hljs-string">""</span>;
    <span>for</span> (<span>var</span> i = <span class= "hljs-number">0</span>; i &lt; <span class= "hljs-number">10</span>; i++)
    {
        laugh += syllable;
        Console.WriteLine(laugh);
    }
    </code></pre>
                <p>The following example uses implicit typing in a <code>foreach</code> statement.</p>
                <div id= "code-try-9"><span>C#</span>
                    <button>

    <span></span>

    <span>Copy</span>

    </button></div>
                <pre ><code name= "csProgGuideCodingConventions#12" data-author-content= "foreach (var ch in laugh)
    {
        if (ch == 'h')
            Console.Write(&quot;H&quot;);
        else
            Console.Write(ch);
    }
    Console.WriteLine();
    "><span>foreach</span> (<span>var</span> ch <span>in</span> laugh)
    {
        <span>if</span> (ch == <span class= "hljs-string">'h'</span>)
            Console.Write(<span class= "hljs-string">"H"</span>);
        <span>else</span>
            Console.Write(ch);
    }
    Console.WriteLine();
    </code></pre>
            </li>
        </ul>
        <h3 id= "unsigned-data-type">Unsigned Data Type<a href= "#unsigned-data-type" aria-labelledby= "unsigned-data-type"></a></h3>
        <ul>
            <li>In general, use <code>int</code> rather than unsigned types. The use of <code>int</code> is common throughout C#, and it is easier to interact with other libraries when you use <code>int</code>.</li>
        </ul>
        <h3 id= "arrays">Arrays<a href= "#arrays" aria-labelledby= "arrays"></a></h3>
        <ul>
            <li>
                <p>Use the concise syntax when you initialize arrays on the declaration line.</p>
                <div id= "code-try-10"><span>C#</span>
                    <button>

    <span></span>

    <span>Copy</span>

    </button></div>
                <pre ><code name= "csProgGuideCodingConventions#13" data-author-content= "// Preferred syntax. Note that you cannot use var here instead of string[].
    string[] vowels1 = { &quot;a&quot;, &quot;e&quot;, &quot;i&quot;, &quot;o&quot;, &quot;u&quot; };

    // If you use explicit instantiation, you can use var.
    var vowels2 = new string[] { &quot;a&quot;, &quot;e&quot;, &quot;i&quot;, &quot;o&quot;, &quot;u&quot; };

    // If you specify an array size, you must initialize the elements one at a time.
    var vowels3 = new string[5];
    vowels3[0] = &quot;a&quot;;
    vowels3[1] = &quot;e&quot;;
    // And so on.
    "><span class= "hljs-comment">// Preferred syntax. Note that you cannot use var here instead of string[].</span>
    <span>string</span>[] vowels1 = { <span class= "hljs-string">"a"</span>, <span class= "hljs-string">"e"</span>, <span class= "hljs-string">"i"</span>, <span class= "hljs-string">"o"</span>, <span class= "hljs-string">"u"</span> };

    <span class= "hljs-comment">// If you use explicit instantiation, you can use var.</span>
    <span>var</span> vowels2 = <span>new</span> <span>string</span>[] { <span class= "hljs-string">"a"</span>, <span class= "hljs-string">"e"</span>, <span class= "hljs-string">"i"</span>, <span class= "hljs-string">"o"</span>, <span class= "hljs-string">"u"</span> };

    <span class= "hljs-comment">// If you specify an array size, you must initialize the elements one at a time.</span>
    <span>var</span> vowels3 = <span>new</span> <span>string</span>[<span class= "hljs-number">5</span>];
    vowels3[<span class= "hljs-number">0</span>] = <span class= "hljs-string">"a"</span>;
    vowels3[<span class= "hljs-number">1</span>] = <span class= "hljs-string">"e"</span>;
    <span class= "hljs-comment">// And so on.</span>
    </code></pre>
            </li>
        </ul>
        <h3 id= "delegates">Delegates<a href= "#delegates" aria-labelledby= "delegates"></a></h3>
        <ul>
            <li>
                <p>Use the concise syntax to create instances of a delegate type.</p>
                <div id= "code-try-11"><span>C#</span>
                    <button>

    <span></span>

    <span>Copy</span>

    </button></div>
                <pre ><code name= "csProgGuideCodingConventions#14" data-author-content= "// First, in class Program, define the delegate type and a method that  
    // has a matching signature.

    // Define the type.
    public delegate void Del(string message);

    // Define a method that has a matching signature.
    public static void DelMethod(string str)
    {
        Console.WriteLine(&quot;DelMethod argument: {0}&quot;, str);
    }
    "><span class= "hljs-comment">// First, in class Program, define the delegate type and a method that  </span>
    <span class= "hljs-comment">// has a matching signature.</span>

    <span class= "hljs-comment">// Define the type.</span>
    <span class= "hljs-function"><span>public</span> <span>delegate</span> <span>void</span> <span class= "hljs-title">Del</span>(<span class= "hljs-params"><span>string</span> message</span>)</span>;

    <span class= "hljs-comment">// Define a method that has a matching signature.</span>
    <span class= "hljs-function"><span>public</span> <span>static</span> <span>void</span> <span class= "hljs-title">DelMethod</span>(<span class= "hljs-params"><span>string</span> str</span>)
    </span>{
        Console.WriteLine(<span class= "hljs-string">"DelMethod argument: {0}"</span>, str);
    }
    </code></pre>
                <div id= "code-try-12"><span>C#</span>
                    <button>

    <span></span>

    <span>Copy</span>

    </button></div>
                <pre ><code name= "csProgGuideCodingConventions#15" data-author-content= "// In the Main method, create an instance of Del.

    // Preferred: Create an instance of Del by using condensed syntax.
    Del exampleDel2 = DelMethod;

    // The following declaration uses the full syntax.
    Del exampleDel1 = new Del(DelMethod);
    "><span class= "hljs-comment">// In the Main method, create an instance of Del.</span>

    <span class= "hljs-comment">// Preferred: Create an instance of Del by using condensed syntax.</span>
    Del exampleDel2 = DelMethod;

    <span class= "hljs-comment">// The following declaration uses the full syntax.</span>
    Del exampleDel1 = <span>new</span> Del(DelMethod);
    </code></pre>
            </li>
        </ul>
        <h3 id= "try-catch-and-using-statements-in-exception-handling">try-catch and using Statements in Exception Handling<a href= "#try-catch-and-using-statements-in-exception-handling" aria-labelledby= "try-catch-and-using-statements-in-exception-handling"></a></h3>
        <ul>
            <li>
                <p>Use a <a href= "../../language-reference/keywords/try-catch" data-linktype= "relative-path">try-catch</a> statement for most exception handling.</p>
                <div id= "code-try-13"><span>C#</span>
                    <button>

    <span></span>

    <span>Copy</span>

    </button></div>
                <pre ><code name= "csProgGuideCodingConventions#16" data-author-content= "static string GetValueFromArray(string[] array, int index)
    {
        try
        {
            return array[index];
        }
        catch (System.IndexOutOfRangeException ex)
        {
            Console.WriteLine(&quot;Index is out of range: {0}&quot;, index);
            throw;
        }
    }
    "><span class= "hljs-function"><span>static</span> <span>string</span> <span class= "hljs-title">GetValueFromArray</span>(<span class= "hljs-params"><span>string</span>[] array, <span>int</span> index</span>)
    </span>{
        <span>try</span>
        {
            <span>return</span> array[index];
        }
        <span>catch</span> (System.IndexOutOfRangeException ex)
        {
            Console.WriteLine(<span class= "hljs-string">"Index is out of range: {0}"</span>, index);
            <span>throw</span>;
        }
    }
    </code></pre>
            </li>
            <li>
                <p>Simplify your code by using the C# <a href= "../../language-reference/keywords/using-statement" data-linktype= "relative-path">using statement</a>. If you have a <a href= "../../language-reference/keywords/try-finally" data-linktype= "relative-path">try-finally</a> statement in which the only code in the <code>finally</code> block is a call to the <a class= "xref" href= "/en-us/dotnet/api/system.idisposable.dispose" data-linktype= "absolute-path">Dispose</a> method, use a <code>using</code> statement instead.</p>
                <div id= "code-try-14"><span>C#</span>
                    <button>

    <span></span>

    <span>Copy</span>

    </button></div>
                <pre ><code name= "csProgGuideCodingConventions#17" data-author-content= "// This try-finally statement only calls Dispose in the finally block.
    Font font1 = new Font(&quot;Arial&quot;, 10.0f);
    try
    {
        byte charset = font1.GdiCharSet;
    }
    finally
    {
        if (font1 != null)
        {
            ((IDisposable)font1).Dispose();
        }
    }

    // You can do the same thing with a using statement.
    using (Font font2 = new Font(&quot;Arial&quot;, 10.0f))
    {
        byte charset = font2.GdiCharSet;
    }
    "><span class= "hljs-comment">// This try-finally statement only calls Dispose in the finally block.</span>
    Font font1 = <span>new</span> Font(<span class= "hljs-string">"Arial"</span>, <span class= "hljs-number">10.0</span>f);
    <span>try</span>
    {
        <span>byte</span> charset = font1.GdiCharSet;
    }
    <span>finally</span>
    {
        <span>if</span> (font1 != <span class= "hljs-literal">null</span>)
        {
            ((IDisposable)font1).Dispose();
        }
    }

    <span class= "hljs-comment">// You can do the same thing with a using statement.</span>
    <span>using</span> (Font font2 = <span>new</span> Font(<span class= "hljs-string">"Arial"</span>, <span class= "hljs-number">10.0</span>f))
    {
        <span>byte</span> charset = font2.GdiCharSet;
    }
    </code></pre>
            </li>
        </ul>
        <h3 id= "-and--operators">&amp;&amp; and || Operators<a href= "#-and--operators" aria-labelledby= "-and--operators"></a></h3>
        <ul>
            <li>
                <p>To avoid exceptions and increase performance by skipping unnecessary comparisons, use <a href= "../../language-reference/operators/boolean-logical-operators#conditional-logical-and-operator-" data-linktype= "relative-path">&amp;&amp;</a> instead of <a href= "../../language-reference/operators/boolean-logical-operators#logical-and-operator-" data-linktype= "relative-path">&amp;</a> and <a href= "../../language-reference/operators/boolean-logical-operators#conditional-logical-or-operator-" data-linktype= "relative-path">||</a> instead of <a href= "../../language-reference/operators/boolean-logical-operators#logical-or-operator-" data-linktype= "relative-path">|</a> when you perform comparisons, as shown in the following example.</p>
                <div id= "code-try-15"><span>C#</span>
                    <button>

    <span></span>

    <span>Copy</span>

    </button></div>
                <pre ><code name= "csProgGuideCodingConventions#18" data-author-content= "Console.Write(&quot;Enter a dividend: &quot;);
    var dividend = Convert.ToInt32(Console.ReadLine());

    Console.Write(&quot;Enter a divisor: &quot;);
    var divisor = Convert.ToInt32(Console.ReadLine());

    // If the divisor is 0, the second clause in the following condition
    // causes a run-time error. The &amp;&amp; operator short circuits when the
    // first expression is false. That is, it does not evaluate the
    // second expression. The &amp; operator evaluates both, and causes 
    // a run-time error when divisor is 0.
    if ((divisor != 0) &amp;&amp; (dividend / divisor > 0))
    {
        Console.WriteLine(&quot;Quotient: {0}&quot;, dividend / divisor);
    }
    else
    {
        Console.WriteLine(&quot;Attempted division by 0 ends up here.&quot;);
    }
    ">Console.Write(<span class= "hljs-string">"Enter a dividend: "</span>);
    <span>var</span> dividend = Convert.ToInt32(Console.ReadLine());

    Console.Write(<span class= "hljs-string">"Enter a divisor: "</span>);
    <span>var</span> divisor = Convert.ToInt32(Console.ReadLine());

    <span class= "hljs-comment">// If the divisor is 0, the second clause in the following condition</span>
    <span class= "hljs-comment">// causes a run-time error. The &amp;&amp; operator short circuits when the</span>
    <span class= "hljs-comment">// first expression is false. That is, it does not evaluate the</span>
    <span class= "hljs-comment">// second expression. The &amp; operator evaluates both, and causes </span>
    <span class= "hljs-comment">// a run-time error when divisor is 0.</span>
    <span>if</span> ((divisor != <span class= "hljs-number">0</span>) &amp;&amp; (dividend / divisor &gt; <span class= "hljs-number">0</span>))
    {
        Console.WriteLine(<span class= "hljs-string">"Quotient: {0}"</span>, dividend / divisor);
    }
    <span>else</span>
    {
        Console.WriteLine(<span class= "hljs-string">"Attempted division by 0 ends up here."</span>);
    }
    </code></pre>
            </li>
        </ul>
        <h3 id= "new-operator">New Operator<a href= "#new-operator" aria-labelledby= "new-operator"></a></h3>
        <ul>
            <li>
                <p>Use the concise form of object instantiation, with implicit typing, as shown in the following declaration.</p>
                <div id= "code-try-16"><span>C#</span>
                    <button>

    <span></span>

    <span>Copy</span>

    </button></div>
                <pre ><code name= "csProgGuideCodingConventions#19" data-author-content= "var instance1 = new ExampleClass();
    "><span>var</span> instance1 = <span>new</span> ExampleClass();
    </code></pre>
                <p>The previous line is equivalent to the following declaration.</p>
                <div id= "code-try-17"><span>C#</span>
                    <button>

    <span></span>

    <span>Copy</span>

    </button></div>
                <pre ><code name= "csProgGuideCodingConventions#20" data-author-content= "ExampleClass instance2 = new ExampleClass();
    ">ExampleClass instance2 = <span>new</span> ExampleClass();
    </code></pre>
            </li>
            <li>
                <p>Use object initializers to simplify object creation.</p>
                <div id= "code-try-18"><span>C#</span>
                    <button>

    <span></span>

    <span>Copy</span>

    </button></div>
                <pre ><code name= "csProgGuideCodingConventions#21" data-author-content= "// Object initializer.
    var instance3 = new ExampleClass { Name = &quot;Desktop&quot;, ID = 37414, 
        Location = &quot;Redmond&quot;, Age = 2.3 };

    // Default constructor and assignment statements.
    var instance4 = new ExampleClass();
    instance4.Name = &quot;Desktop&quot;;
    instance4.ID = 37414;
    instance4.Location = &quot;Redmond&quot;;
    instance4.Age = 2.3;
    "><span class= "hljs-comment">// Object initializer.</span>
    <span>var</span> instance3 = <span>new</span> ExampleClass { Name = <span class= "hljs-string">"Desktop"</span>, ID = <span class= "hljs-number">37414</span>, 
        Location = <span class= "hljs-string">"Redmond"</span>, Age = <span class= "hljs-number">2.3</span> };

    <span class= "hljs-comment">// Default constructor and assignment statements.</span>
    <span>var</span> instance4 = <span>new</span> ExampleClass();
    instance4.Name = <span class= "hljs-string">"Desktop"</span>;
    instance4.ID = <span class= "hljs-number">37414</span>;
    instance4.Location = <span class= "hljs-string">"Redmond"</span>;
    instance4.Age = <span class= "hljs-number">2.3</span>;
    </code></pre>
            </li>
        </ul>
        <h3 id= "event-handling">Event Handling<a href= "#event-handling" aria-labelledby= "event-handling"></a></h3>
        <ul>
            <li>
                <p>If you are defining an event handler that you do not need to remove later, use a lambda expression.</p>
                <div id= "code-try-19"><span>C#</span>
                    <button>

    <span></span>

    <span>Copy</span>

    </button></div>
                <pre ><code name= "csProgGuideCodingConventions#22" data-author-content= "public Form2()
    {
        // You can use a lambda expression to define an event handler.
        this.Click += (s, e) =>
            {
                MessageBox.Show(
                    ((MouseEventArgs)e).Location.ToString());
            };
    }
    "><span class= "hljs-function"><span>public</span> <span class= "hljs-title">Form2</span>(<span class= "hljs-params"></span>)
    </span>{
        <span class= "hljs-comment">// You can use a lambda expression to define an event handler.</span>
        <span>this</span>.Click += (s, e) =&gt;
            {
                MessageBox.Show(
                    ((MouseEventArgs)e).Location.ToString());
            };
    }
    </code></pre>
                <div id= "code-try-20"><span>C#</span>
                    <button>

    <span></span>

    <span>Copy</span>

    </button></div>
                <pre ><code name= "csProgGuideCodingConventions#23" data-author-content= "// Using a lambda expression shortens the following traditional definition.
    public Form1()
    {
        this.Click += new EventHandler(Form1_Click);
    }

    void Form1_Click(object sender, EventArgs e)
    {
        MessageBox.Show(((MouseEventArgs)e).Location.ToString());
    }
    "><span class= "hljs-comment">// Using a lambda expression shortens the following traditional definition.</span>
    <span class= "hljs-function"><span>public</span> <span class= "hljs-title">Form1</span>(<span class= "hljs-params"></span>)
    </span>{
        <span>this</span>.Click += <span>new</span> EventHandler(Form1_Click);
    }

    <span class= "hljs-function"><span>void</span> <span class= "hljs-title">Form1_Click</span>(<span class= "hljs-params"><span>object</span> sender, EventArgs e</span>)
    </span>{
        MessageBox.Show(((MouseEventArgs)e).Location.ToString());
    }
    </code></pre>
            </li>
        </ul>
        <h3 id= "static-members">Static Members<a href= "#static-members" aria-labelledby= "static-members"></a></h3>
        <ul>
            <li>Call <a href= "../../language-reference/keywords/static" data-linktype= "relative-path">static</a> members by using the class name: <em>ClassName.StaticMember</em>. This practice makes code more readable by making static access clear. Do not qualify a static member defined in a base class with the name of a derived class. While that code compiles, the code readability is misleading, and the code may break in the future if you add a static member with the same name to the derived class.</li>
        </ul>
        <h3 id= "linq-queries">LINQ Queries<a href= "#linq-queries" aria-labelledby= "linq-queries"></a></h3>
        <ul>
            <li>
                <p>Use meaningful names for query variables. The following example uses <code>seattleCustomers</code> for customers who are located in Seattle.</p>
                <div id= "code-try-21"><span>C#</span>
                    <button>

    <span></span>

    <span>Copy</span>

    </button></div>
                <pre ><code name= "csProgGuideCodingConventions#25" data-author-content= "var seattleCustomers = from customer in customers
                        where customer.City == &quot;Seattle&quot;
                        select customer.Name;
    "><span>var</span> seattleCustomers = <span>from</span> customer <span>in</span> customers
                        <span>where</span> customer.City == <span class= "hljs-string">"Seattle"</span>
                        <span>select</span> customer.Name;
    </code></pre>
            </li>
            <li>
                <p>Use aliases to make sure that property names of anonymous types are correctly capitalized, using Pascal casing.</p>
                <div id= "code-try-22"><span>C#</span>
                    <button>

    <span></span>

    <span>Copy</span>

    </button></div>
                <pre ><code name= "csProgGuideCodingConventions#26" data-author-content= "var localDistributors =
        from customer in customers
        join distributor in distributors on customer.City equals distributor.City
        select new { Customer = customer, Distributor = distributor };
    "><span>var</span> localDistributors =
        <span>from</span> customer <span>in</span> customers
        <span>join</span> distributor <span>in</span> distributors <span>on</span> customer.City <span>equals</span> distributor.City
        <span>select</span> <span>new</span> { Customer = customer, Distributor = distributor };
    </code></pre>
            </li>
            <li>
                <p>Rename properties when the property names in the result would be ambiguous. For example, if your query returns a customer name and a distributor ID, instead of leaving them as <code>Name</code> and <code>ID</code> in the result, rename them to clarify that <code>Name</code> is the name of a customer, and <code>ID</code> is the ID of a distributor.</p>
                <div id= "code-try-23"><span>C#</span>
                    <button>

    <span></span>

    <span>Copy</span>

    </button></div>
                <pre ><code name= "csProgGuideCodingConventions#27" data-author-content= "var localDistributors2 =
        from customer in customers
        join distributor in distributors on customer.City equals distributor.City
        select new { CustomerName = customer.Name, DistributorID = distributor.ID };
    "><span>var</span> localDistributors2 =
        <span>from</span> customer <span>in</span> customers
        <span>join</span> distributor <span>in</span> distributors <span>on</span> customer.City <span>equals</span> distributor.City
        <span>select</span> <span>new</span> { CustomerName = customer.Name, DistributorID = distributor.ID };
    </code></pre>
            </li>
            <li>
                <p>Use implicit typing in the declaration of query variables and range variables.</p>
                <div id= "code-try-24"><span>C#</span>
                    <button>

    <span></span>

    <span>Copy</span>

    </button></div>
                <pre ><code name= "csProgGuideCodingConventions#25" data-author-content= "var seattleCustomers = from customer in customers
                        where customer.City == &quot;Seattle&quot;
                        select customer.Name;
    "><span>var</span> seattleCustomers = <span>from</span> customer <span>in</span> customers
                        <span>where</span> customer.City == <span class= "hljs-string">"Seattle"</span>
                        <span>select</span> customer.Name;
    </code></pre>
            </li>
            <li>
                <p>Align query clauses under the <a href= "../../language-reference/keywords/from-clause" data-linktype= "relative-path">from</a> clause, as shown in the previous examples.</p>
            </li>
            <li>
                <p>Use <a href= "../../language-reference/keywords/where-clause" data-linktype= "relative-path">where</a> clauses before other query clauses to ensure that later query clauses operate on the reduced, filtered set of data.</p>
                <div id= "code-try-25"><span>C#</span>
                    <button>

    <span></span>

    <span>Copy</span>

    </button></div>
                <pre ><code name= "csProgGuideCodingConventions#29" data-author-content= "var seattleCustomers2 = from customer in customers
                            where customer.City == &quot;Seattle&quot;
                            orderby customer.Name
                            select customer;
    "><span>var</span> seattleCustomers2 = <span>from</span> customer <span>in</span> customers
                            <span>where</span> customer.City == <span class= "hljs-string">"Seattle"</span>
                            <span>orderby</span> customer.Name
                            <span>select</span> customer;
    </code></pre>
            </li>
            <li>
                <p>Use multiple <code>from</code> clauses instead of a <a href= "../../language-reference/keywords/join-clause" data-linktype= "relative-path">join</a> clause to access inner collections. For example, a collection of <code>Student</code> objects might each contain a collection of test scores. When the following query is executed, it returns each score that is over 90, along with the last name of the student who received the score.</p>
                <div id= "code-try-26"><span>C#</span>
                    <button>

    <span></span>

    <span>Copy</span>

    </button></div>
                <pre ><code name= "csProgGuideCodingConventions#30" data-author-content= "// Use a compound from to access the inner sequence within each element.
    var scoreQuery = from student in students
                    from score in student.Scores
                    where score > 90
                    select new { Last = student.LastName, score };
    "><span class= "hljs-comment">// Use a compound from to access the inner sequence within each element.</span>
    <span>var</span> scoreQuery = <span>from</span> student <span>in</span> students
                    <span>from</span> score <span>in</span> student.Scores
                    <span>where</span> score &gt; <span class= "hljs-number">90</span>
                    <span>select</span> <span>new</span> { Last = student.LastName, score };
    </code></pre>
            </li>
        </ul>
        <h2 id= "security">Security<a href= "#security" aria-labelledby= "security"></a></h2>
        <p>Follow the guidelines in <a href= "../../../standard/security/secure-coding-guidelines" data-linktype= "relative-path">Secure Coding Guidelines</a>.</p>
        <h2 id= "see-also">See also<a href= "#see-also" aria-labelledby= "see-also"></a></h2>
        <ul>
            <li><a href= "../../../visual-basic/programming-guide/program-structure/coding-conventions" data-linktype= "relative-path">Visual Basic Coding Conventions</a></li>
            <li><a href= "../../../standard/security/secure-coding-guidelines" data-linktype= "relative-path">Secure Coding Guidelines</a></li>
        </ul>
    </div>
</template>

<script>
    export default {

        name: 'navCSharpBestPractices',
    } //default
</script>

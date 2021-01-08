<template>
<div class= 'navBestPractices'>
    https://code.tutsplus.com/tutorials/top-15-best-practices-for-writing-super-readable-code--net-8118
    <div>
        <p>Code readability is a universal subject in the world of computer programming. It's one of the first things we learn as developers. This article will detail the fifteen most important best practices when writing readable code. </p>
        <h2>1 - Commenting &amp; Documentation</h2>
        <p>IDE's (Integrated Development Environment) have come a long way in the past few years. This made commenting your code more useful than ever. Following certain standards in your comments allows IDE's and other tools to utilize them in different ways.</p>
        <p>Consider this example:</p>
        <div><vue-img data-src= "https://cdn.tutsplus.com/net/uploads/legacy/516_code/readable_code_1.png" class= "loaded" src= "https://cdn.tutsplus.com/net/uploads/legacy/516_code/readable_code_1.png" data-was-processed= "true" /></div>
            <p>The comments I added at the function definition can be previewed whenever I use that function, even from other files.</p>
            <p>Here is another example where I call a function from a third party library:</p>
            <div><vue-img data-src= "https://cdn.tutsplus.com/net/uploads/legacy/516_code/readable_code_2.png" class= "loaded" src= "https://cdn.tutsplus.com/net/uploads/legacy/516_code/readable_code_2.png" data-was-processed= "true" /></div>
        <p>In these particular examples, the type of commenting (or documentation) used is based on <a href= "http://www.phpdoc.org/">PHPDoc</a>, and the IDE is <a href= "http://aptana.org/">Aptana</a>.</p>
        <h2>2 - Consistent Indentation</h2>
        <p>I assume you already know that you should indent your code. However, it's also worth noting that it is a good idea to keep your indentation style consistent.</p>
        <p>There are more than one way of indenting code.</p>
        <h5>Style 1:</h5>
        <div>
            <div>
                <table cellspacing= "0" cellpadding= "0" border= "0">
                    <tbody>
                        <tr>
                            <td class= "gutter">
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                                <div>5</div>
                                <div>6</div>
                                <div>7</div>
                                <div>8</div>
                                <div>9</div>
                            </td>
                            <td class= "code">
                                <div class= "container">
                                    <div><code>function</code> <code>foo() {</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>if</code> <code>(</code><code>$maybe</code><code>) {</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>do_it_now();</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>again();</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>} </code><code>else</code> <code>{</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>abort_mission();</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>}</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>finalize();</code></div>
                                    <div><code>}</code></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <h5>Style 2:</h5>
        <div>
            <div>
                <table cellspacing= "0" cellpadding= "0" border= "0">
                    <tbody>
                        <tr>
                            <td class= "gutter">
                                <div>01</div>
                                <div>02</div>
                                <div>03</div>
                                <div>04</div>
                                <div>05</div>
                                <div>06</div>
                                <div>07</div>
                                <div>08</div>
                                <div>09</div>
                                <div>10</div>
                                <div>11</div>
                                <div>12</div>
                                <div>13</div>
                            </td>
                            <td class= "code">
                                <div class= "container">
                                    <div><code>function</code> <code>foo()</code></div>
                                    <div><code>{</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>if</code> <code>(</code><code>$maybe</code><code>)</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>{</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>do_it_now();</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>again();</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>}</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>else</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>{</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>abort_mission();</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>}</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>finalize();</code></div>
                                    <div><code>}</code></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <h5>Style 3:</h5>
        <div>
            <div>
                <table cellspacing= "0" cellpadding= "0" border= "0">
                    <tbody>
                        <tr>
                            <td class= "gutter">
                                <div>01</div>
                                <div>02</div>
                                <div>03</div>
                                <div>04</div>
                                <div>05</div>
                                <div>06</div>
                                <div>07</div>
                                <div>08</div>
                                <div>09</div>
                                <div>10</div>
                            </td>
                            <td class= "code">
                                <div class= "container">
                                    <div><code>function</code> <code>foo()</code></div>
                                    <div><code>{&nbsp;&nbsp; </code><code>if</code> <code>(</code><code>$maybe</code><code>)</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>{&nbsp;&nbsp; do_it_now();</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>again();</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>}</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>else</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>{&nbsp;&nbsp; abort_mission();</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>}</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>finalize();</code></div>
                                    <div><code>}</code></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <p>I used to code in style #2 but recently switched to #1. But that is only a matter of preference. There is no "best" style that everyone should be following. Actually, the best style, is a consistent style. If you are part of a team or if you are contributing code to a project, you should follow the existing style that is being used in that project.</p>
        <p>The indentation styles are not always completely distinct from one another. Sometimes, they mix different rules. For example, in <a href= "http://pear.php.net/manual/en/standards.php">PEAR Coding Standards</a>, the opening bracket <code>"{"</code> goes on the same line as <a href= "http://pear.php.net/manual/en/standards.control.php">control structures</a>, but they go to the next line after <a href= "http://pear.php.net/manual/en/standards.funcdef.php">function definitions</a>.</p>
        <p>PEAR Style:</p>
        <div>
            <div>
                <table cellspacing= "0" cellpadding= "0" border= "0">
                    <tbody>
                        <tr>
                            <td class= "gutter">
                                <div>01</div>
                                <div>02</div>
                                <div>03</div>
                                <div>04</div>
                                <div>05</div>
                                <div>06</div>
                                <div>07</div>
                                <div>08</div>
                                <div>09</div>
                                <div>10</div>
                            </td>
                            <td class= "code">
                                <div class= "container">
                                    <div><code>function</code> <code>foo()</code></div>
                                    <div><code>{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </code><code>// placed on the next line</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>if</code> <code>(</code><code>$maybe</code><code>) {&nbsp;&nbsp;&nbsp;&nbsp; </code><code>// placed on the same line</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>do_it_now();</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>again();</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>} </code><code>else</code> <code>{</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>abort_mission();</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>}</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>finalize();</code></div>
                                    <div><code>}</code></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <p>Also note that they are using four spaces instead of tabs for indentations.</p>
        <p><a href= "http://en.wikipedia.org/wiki/Indent_style">Here</a> is a Wikipedia article with samples of different indent styles.</p>
        <div style= "display: block; margin-top: 30px;">
            <div>
                <div>
                    <div>
                        <div data-fuse= "21764347426"></div>
                    </div>
                    <div>Advertisement</div>
                </div>
            </div>
        </div>
        <h2>3 - Avoid Obvious Comments</h2>
        <p>Commenting your code is fantastic; however, it can be overdone or just be plain redundant. Take this example:</p>
        <div>
            <div>
                <table cellspacing= "0" cellpadding= "0" border= "0">
                    <tbody>
                        <tr>
                            <td class= "gutter">
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                                <div>5</div>
                                <div>6</div>
                                <div>7</div>
                                <div>8</div>
                                <div>9</div>
                            </td>
                            <td class= "code">
                                <div class= "container">
                                    <div><code>// get the country code</code></div>
                                    <div><code>$country_code</code> <code>= get_country_code(</code><code>$_SERVER</code><code>[</code><code>'REMOTE_ADDR'</code><code>]);</code></div>
                                    <div>&nbsp;</div>
                                    <div><code>// if country code is US</code></div>
                                    <div><code>if</code> <code>(</code><code>$country_code</code> <code>== </code><code>'US'</code><code>) {</code></div>
                                    <div>&nbsp;</div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>// display the form input for state</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>echo</code> <code>form_input_state();</code></div>
                                    <div><code>}</code></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <p>When the text is that obvious, it's really not productive to repeat it within comments.</p>
        <p>If you must comment on that code, you can simply combine it to a single line instead:</p>
        <div>
            <div>
                <table cellspacing= "0" cellpadding= "0" border= "0">
                    <tbody>
                        <tr>
                            <td class= "gutter">
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                                <div>5</div>
                            </td>
                            <td class= "code">
                                <div class= "container">
                                    <div><code>// display state selection for US users</code></div>
                                    <div><code>$country_code</code> <code>= get_country_code(</code><code>$_SERVER</code><code>[</code><code>'REMOTE_ADDR'</code><code>]);</code></div>
                                    <div><code>if</code> <code>(</code><code>$country_code</code> <code>== </code><code>'US'</code><code>) {</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>echo</code> <code>form_input_state();</code></div>
                                    <div><code>}</code></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <h2>4 - Code Grouping</h2>
        <p>More often than not, certain tasks require a few lines of code. It is a good idea to keep these tasks within separate blocks of code, with some spaces between them.</p>
        <p>Here is a simplified example:</p>
        <div>
            <div>
                <table cellspacing= "0" cellpadding= "0" border= "0">
                    <tbody>
                        <tr>
                            <td class= "gutter">
                                <div>01</div>
                                <div>02</div>
                                <div>03</div>
                                <div>04</div>
                                <div>05</div>
                                <div>06</div>
                                <div>07</div>
                                <div>08</div>
                                <div>09</div>
                                <div>10</div>
                                <div>11</div>
                            </td>
                            <td class= "code">
                                <div class= "container">
                                    <div><code>// get list of forums</code></div>
                                    <div><code>$forums</code> <code>= </code><code>array</code><code>();</code></div>
                                    <div><code>$r</code> <code>= mysql_query(</code><code>"SELECT id, name, description FROM forums"</code><code>);</code></div>
                                    <div><code>while</code> <code>(</code><code>$d</code> <code>= mysql_fetch_assoc(</code><code>$r</code><code>)) {</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>$forums</code> <code>[]= </code><code>$d</code><code>;</code></div>
                                    <div><code>}</code></div>
                                    <div>&nbsp;</div>
                                    <div><code>// load the templates</code></div>
                                    <div><code>load_template(</code><code>'header'</code><code>);</code></div>
                                    <div><code>load_template(</code><code>'forum_list'</code><code>,</code><code>$forums</code><code>);</code></div>
                                    <div><code>load_template(</code><code>'footer'</code><code>);</code></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <p>Adding a comment at the beginning of each block of code also emphasizes the visual separation.</p>
        <h2>5 - Consistent Naming Scheme</h2>
        <p>PHP itself is sometimes guilty of not following consistent naming schemes:</p>
        <ul>
            <li>strpos() vs. str_split()</li>
            <li>imagetypes() vs. image_type_to_extension()</li>
        </ul>
        <p>First of all, the names should have word boundaries. There are two popular options:</p>
        <ul>
            <li>
                <strong>camelCase:</strong> First letter of each word is capitalized, except the first word.</li>
            <li>
                <strong>underscores:</strong> Underscores between words, like: mysql_real_escape_string().</li>
        </ul>
        <p>Having different options creates a situation similar to the indent styles, as I mentioned earlier. If an existing project follows a certain convention, you should go with that. Also, some language platforms tend to use a certain naming scheme. For instance, in Java, most code uses camelCase names, while in PHP, the majority of uses underscores.</p>
        <p>These can also be mixed. Some developers prefer to use underscores for procedural functions, and class names, but use camelCase for class method names:</p>
        <div>
            <div>
                <table cellspacing= "0" cellpadding= "0" border= "0">
                    <tbody>
                        <tr>
                            <td class= "gutter">
                                <div>01</div>
                                <div>02</div>
                                <div>03</div>
                                <div>04</div>
                                <div>05</div>
                                <div>06</div>
                                <div>07</div>
                                <div>08</div>
                                <div>09</div>
                                <div>10</div>
                                <div>11</div>
                            </td>
                            <td class= "code">
                                <div class= "container">
                                    <div><code>class</code> <code>Foo_Bar {</code></div>
                                    <div>&nbsp;</div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>public</code> <code>function</code> <code>someDummyMethod() {</code></div>
                                    <div>&nbsp;</div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>}</code></div>
                                    <div>&nbsp;</div>
                                    <div><code>}</code></div>
                                    <div>&nbsp;</div>
                                    <div><code>function</code> <code>procedural_function_name() {</code></div>
                                    <div>&nbsp;</div>
                                    <div><code>}</code></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <p>So again, there is no obvious "best" style. Just being consistent.</p>
        <h2>6 - DRY Principle</h2>
        <p>DRY stands for Don't Repeat Yourself. Also known as DIE: Duplication is Evil.</p>
        <p>The principle states:</p>
        <blockquote>
            <p> "Every piece of knowledge must have a single, unambiguous, authoritative representation within a system."</p>
        </blockquote>
        <p> The purpose for most applications (or computers in general) is to automate repetitive tasks. This principle should be maintained in all code, even web applications. The same piece of code should not be repeated over and over again.</p>
        <p>For example, most web applications consist of many pages. It's highly likely that these pages will contain common elements. Headers and footers are usually best candidates for this. It's not a good idea to keep copy pasting these headers and footers into every page. <a href= "http://screenr.com/YO7">Here</a> is Jeffrey Way explaining how to create templates in CodeIgniter.</p>
        <div>
            <div>
                <table cellspacing= "0" cellpadding= "0" border= "0">
                    <tbody>
                        <tr>
                            <td class= "gutter">
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                                <div>5</div>
                            </td>
                            <td class= "code">
                                <div class= "container">
                                    <div><code>$this</code><code>-&gt;load-&gt;view(</code><code>'includes/header'</code><code>);</code></div>
                                    <div>&nbsp;</div>
                                    <div><code>$this</code><code>-&gt;load-&gt;view(</code><code>$main_content</code><code>);</code></div>
                                    <div>&nbsp;</div>
                                    <div><code>$this</code><code>-&gt;load-&gt;view(</code><code>'includes/footer'</code><code>);</code></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <h2>7 - Avoid Deep Nesting</h2>
        <p>Too many levels of nesting can make code harder to read and follow.</p>
        <div>
            <div>
                <table cellspacing= "0" cellpadding= "0" border= "0">
                    <tbody>
                        <tr>
                            <td class= "gutter">
                                <div>01</div>
                                <div>02</div>
                                <div>03</div>
                                <div>04</div>
                                <div>05</div>
                                <div>06</div>
                                <div>07</div>
                                <div>08</div>
                                <div>09</div>
                                <div>10</div>
                                <div>11</div>
                                <div>12</div>
                                <div>13</div>
                                <div>14</div>
                                <div>15</div>
                                <div>16</div>
                                <div>17</div>
                                <div>18</div>
                                <div>19</div>
                                <div>20</div>
                                <div>21</div>
                                <div>22</div>
                                <div>23</div>
                                <div>24</div>
                                <div>25</div>
                                <div>26</div>
                                <div>27</div>
                            </td>
                            <td class= "code">
                                <div class= "container">
                                    <div><code>function</code> <code>do_stuff() {</code></div>
                                    <div>&nbsp;</div>
                                    <div><code>// ...</code></div>
                                    <div>&nbsp;</div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>if</code> <code>(</code><code>is_writable</code><code>(</code><code>$folder</code><code>)) {</code></div>
                                    <div>&nbsp;</div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>if</code> <code>(</code><code>$fp</code> <code>= </code><code>fopen</code><code>(</code><code>$file_path</code><code>,</code><code>'w'</code><code>)) {</code></div>
                                    <div>&nbsp;</div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>if</code> <code>(</code><code>$stuff</code> <code>= get_some_stuff()) {</code></div>
                                    <div>&nbsp;</div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>if</code> <code>(fwrite(</code><code>$fp</code><code>,</code><code>$stuff</code><code>)) {</code></div>
                                    <div>&nbsp;</div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>// ...</code></div>
                                    <div>&nbsp;</div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>} </code><code>else</code> <code>{</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>return</code> <code>false;</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>}</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>} </code><code>else</code> <code>{</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>return</code> <code>false;</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>}</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>} </code><code>else</code> <code>{</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>return</code> <code>false;</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>}</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>} </code><code>else</code> <code>{</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>return</code> <code>false;</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>}</code></div>
                                    <div><code>}</code></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <p>For the sake of readability, it is usually possible to make changes to your code to reduce the level of nesting:</p>
        <div>
            <div id= "highlighter_121023">
                <table cellspacing= "0" cellpadding= "0" border= "0">
                    <tbody>
                        <tr>
                            <td class= "gutter">
                                <div>01</div>
                                <div>02</div>
                                <div>03</div>
                                <div>04</div>
                                <div>05</div>
                                <div>06</div>
                                <div>07</div>
                                <div>08</div>
                                <div>09</div>
                                <div>10</div>
                                <div>11</div>
                                <div>12</div>
                                <div>13</div>
                                <div>14</div>
                                <div>15</div>
                                <div>16</div>
                                <div>17</div>
                                <div>18</div>
                                <div>19</div>
                                <div>20</div>
                                <div>21</div>
                                <div>22</div>
                            </td>
                            <td class= "code">
                                <div class= "container">
                                    <div><code>function</code> <code>do_stuff() {</code></div>
                                    <div>&nbsp;</div>
                                    <div><code>// ...</code></div>
                                    <div>&nbsp;</div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>if</code> <code>(!</code><code>is_writable</code><code>(</code><code>$folder</code><code>)) {</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>return</code> <code>false;</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>}</code></div>
                                    <div>&nbsp;</div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>if</code> <code>(!</code><code>$fp</code> <code>= </code><code>fopen</code><code>(</code><code>$file_path</code><code>,</code><code>'w'</code><code>)) {</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>return</code> <code>false;</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>}</code></div>
                                    <div>&nbsp;</div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>if</code> <code>(!</code><code>$stuff</code> <code>= get_some_stuff()) {</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>return</code> <code>false;</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>}</code></div>
                                    <div>&nbsp;</div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>if</code> <code>(fwrite(</code><code>$fp</code><code>,</code><code>$stuff</code><code>)) {</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>// ...</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>} </code><code>else</code> <code>{</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>return</code> <code>false;</code></div>
                                    <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>}</code></div>
                                    <div><code>}</code></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <h2>8 - Limit Line Length</h2>
        <p>Our eyes are more comfortable when reading tall and narrow columns of text. This is precisely the reason why newspaper articles look like this:</p>
        <div><vue-img data-src= "https://cdn.tutsplus.com/net/uploads/legacy/516_code/newspaper.jpg" class= "loaded" src= "https://cdn.tutsplus.com/net/uploads/legacy/516_code/newspaper.jpg" data-was-processed= "true" /></div>
            <p>It is a good practice to avoid writing horizontally long lines of code.</p>
            <div>
                <div id= "highlighter_444118">
                    <table cellspacing= "0" cellpadding= "0" border= "0">
                        <tbody>
                            <tr>
                                <td class= "gutter">
                                    <div>01</div>
                                    <div>02</div>
                                    <div>03</div>
                                    <div>04</div>
                                    <div>05</div>
                                    <div>06</div>
                                    <div>07</div>
                                    <div>08</div>
                                    <div>09</div>
                                    <div>10</div>
                                    <div>11</div>
                                    <div>12</div>
                                    <div>13</div>
                                    <div>14</div>
                                    <div>15</div>
                                    <div>16</div>
                                    <div>17</div>
                                    <div>18</div>
                                    <div>19</div>
                                </td>
                                <td class= "code">
                                    <div class= "container">
                                        <div><code>// bad</code></div>
                                        <div><code>$my_email</code><code>-&gt;set_from(</code><code>'test@email.com'</code><code>)-&gt;add_to(</code><code>'programming@gmail.com'</code><code>)-&gt;set_subject(</code><code>'Methods Chained'</code><code>)-&gt;set_body(</code><code>'Some long message'</code><code>)-&gt;send();</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>// good</code></div>
                                        <div><code>$my_email</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>-&gt;set_from(</code><code>'test@email.com'</code><code>)</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>-&gt;add_to(</code><code>'programming@gmail.com'</code><code>)</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>-&gt;set_subject(</code><code>'Methods Chained'</code><code>)</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>-&gt;set_body(</code><code>'Some long message'</code><code>)</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>-&gt;send();</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>// bad</code></div>
                                        <div><code>$query</code> <code>= </code><code>"SELECT id, username, first_name, last_name, status FROM users LEFT JOIN user_posts USING(users.id, user_posts.user_id) WHERE post_id = '123'"</code><code>;</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>// good</code></div>
                                        <div><code>$query</code> <code>= "SELECT id, username, first_name, last_name, status</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>FROM users</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>LEFT JOIN user_posts USING(users.id, user_posts.user_id)</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>WHERE post_id = </code><code>'123'</code><code>";</code></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <p>Also, if anyone intends to read the code from a terminal window, such as <a href= "https://net.tutsplus.com/tutorials/other/venturing-into-vim-new-premium-video-series/">Vim users</a>, it is a good idea to to limit the line length to around 80 characters.</p>
            <h2>9 - File and Folder Organization</h2>
            <p>Technically, you could write an entire application code within a single file. But that would prove to be a nightmare to read and maintain.</p>
            <p>During my first programming projects, I knew about the idea of creating "include files." However, I was not yet even remotely organized. I created an "inc" folder, with two files in it: <code>db.php</code> and <code>functions.php</code>. As the applications grew, the functions file also became huge and unmaintainable.</p>
            <p>One of the best approaches is to either <a href= "https://net.tutsplus.com/sessions/codeigniter-from-scratch/">use a framework</a>, or imitate their folder structure. Here is what CodeIgniter looks like:</p>
            <div><vue-img data-src= "https://cdn.tutsplus.com/net/uploads/legacy/516_code/readable_code_3.png" class= "loaded" src= "https://cdn.tutsplus.com/net/uploads/legacy/516_code/readable_code_3.png" data-was-processed= "true" /></div>
            <h2>10 - Consistent Temporary Names</h2>
            <p>Normally, the variables should be descriptive and contain one or more words. But, this doesn't necessarily apply to temporary variables. They can be as short as a single character.</p>
            <p>It is a good practice to use consistent names for your temporary variables that have the same kind of role. Here are a few examples that I tend use in my code:</p>
            <div>
                <div id= "highlighter_77914">
                    <table cellspacing= "0" cellpadding= "0" border= "0">
                        <tbody>
                            <tr>
                                <td class= "gutter">
                                    <div>01</div>
                                    <div>02</div>
                                    <div>03</div>
                                    <div>04</div>
                                    <div>05</div>
                                    <div>06</div>
                                    <div>07</div>
                                    <div>08</div>
                                    <div>09</div>
                                    <div>10</div>
                                    <div>11</div>
                                    <div>12</div>
                                    <div>13</div>
                                    <div>14</div>
                                    <div>15</div>
                                    <div>16</div>
                                    <div>17</div>
                                    <div>18</div>
                                    <div>19</div>
                                    <div>20</div>
                                    <div>21</div>
                                    <div>22</div>
                                    <div>23</div>
                                    <div>24</div>
                                    <div>25</div>
                                    <div>26</div>
                                    <div>27</div>
                                    <div>28</div>
                                    <div>29</div>
                                    <div>30</div>
                                    <div>31</div>
                                </td>
                                <td class= "code">
                                    <div class= "container">
                                        <div><code>// $i for loop counters</code></div>
                                        <div><code>for</code> <code>(</code><code>$i</code> <code>= 0; </code><code>$i</code> <code>&lt; 100; </code><code>$i</code><code>++) {</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>// $j for the nested loop counters</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>for</code> <code>(</code><code>$j</code> <code>= 0; </code><code>$j</code> <code>&lt; 100; </code><code>$j</code><code>++) {</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>}</code></div>
                                        <div><code>}</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>// $ret for return variables</code></div>
                                        <div><code>function</code> <code>foo() {</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>$ret</code><code>[</code><code>'bar'</code><code>] = get_bar();</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>$ret</code><code>[</code><code>'stuff'</code><code>] = get_stuff();</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>return</code> <code>$ret</code><code>;</code></div>
                                        <div><code>}</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>// $k and $v in foreach</code></div>
                                        <div><code>foreach</code> <code>(</code><code>$some_array</code> <code>as</code> <code>$k</code> <code>=&gt; </code><code>$v</code><code>) {</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>}</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>// $q, $r and $d for mysql</code></div>
                                        <div><code>$q</code> <code>= </code><code>"SELECT * FROM table"</code><code>;</code></div>
                                        <div><code>$r</code> <code>= mysql_query(</code><code>$q</code><code>);</code></div>
                                        <div><code>while</code> <code>(</code><code>$d</code> <code>= mysql_fetch_assocr(</code><code>$r</code><code>)) {</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>}</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>// $fp for file pointers</code></div>
                                        <div><code>$fp</code> <code>= </code><code>fopen</code><code>(</code><code>'file.txt'</code><code>,</code><code>'w'</code><code>);</code></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h2>11 - Capitalize SQL Special Words</h2>
            <p>Database interaction is a big part of most web applications. If you are writing raw SQL queries, it is a good idea to keep them readable as well.</p>
            <p>Even though SQL special words and function names are case insensitive, it is common practice to capitalize them to distinguish them from your table and column names.</p>
            <div>
                <div id= "highlighter_906134" class= "syntaxhighlighter  html">
                    <table cellspacing= "0" cellpadding= "0" border= "0">
                        <tbody>
                            <tr>
                                <td class= "gutter">
                                    <div>01</div>
                                    <div>02</div>
                                    <div>03</div>
                                    <div>04</div>
                                    <div>05</div>
                                    <div>06</div>
                                    <div>07</div>
                                    <div>08</div>
                                    <div>09</div>
                                    <div>10</div>
                                    <div>11</div>
                                </td>
                                <td class= "code">
                                    <div class= "container">
                                        <div><code>SELECT id, username FROM user;</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>UPDATE user SET last_login = NOW()</code></div>
                                        <div><code>WHERE id = '123'</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>SELECT id, username FROM user u</code></div>
                                        <div><code>LEFT JOIN user_address ua ON(u.id = ua.user_id)</code></div>
                                        <div><code>WHERE ua.state = 'NY'</code></div>
                                        <div><code>GROUP BY u.id</code></div>
                                        <div><code>ORDER BY u.username</code></div>
                                        <div><code>LIMIT 0,20</code></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h2>12 - Separation of Code and Data</h2>
            <p>This is another principle that applies to almost all programming languages in all environments. In the case of web development, the "data" usually implies HTML output.</p>
            <p>When PHP was first released many years ago, it was primarily seen as a template engine. It was common to have big HTML files with a few lines of PHP code in between. However, things have changed over the years and websites became more and more dynamic and functional. The code is now a huge part of web applications, and it is no longer a good practice to combine it with the HTML.</p>
            <p>You can either apply the principle to your application by yourself, or you can use a third party tool (template engines, frameworks or CMS's) and follow their conventions.</p>
            <p>Popular PHP Frameworks:</p>
            <ul>
                <li><a href= "http://codeigniter.com/">CodeIgniter</a></li>
                <li><a href= "http://framework.zend.com/">Zend Framework</a></li>
                <li><a href= "http://cakephp.org/">Cake PHP</a></li>
                <li><a href= "http://www.symfony-project.org/">Symfony</a></li>
            </ul>
            <p>Popular Template Engines:</p>
            <ul>
                <li><a href= "http://www.smarty.net/">Smarty</a></li>
                <li><a href= "http://dwoo.org/">Dwoo</a></li>
                <li><a href= "http://phpsavant.com/">Savant</a></li>
            </ul>
            <p>Popular Content Management Systems</p>
            <h2>13 - Alternate Syntax Inside Templates</h2>
            <p>You may choose not to use a fancy template engine, and instead go with plain inline PHP in your template files. This does not necessarily violate the "Separation of Code and Data," as long as the inline code is directly related to the output, and is readable. In this case you should consider using the <a href= "http://php.net/manual/en/control-structures.alternative-syntax.php">alternate syntax for control structures</a>.</p>
            <p>Here is an example:</p>
            <div>
                <div>
                    <table cellspacing= "0" cellpadding= "0" border= "0">
                        <tbody>
                            <tr>
                                <td class= "gutter">
                                    <div>01</div>
                                    <div>02</div>
                                    <div>03</div>
                                    <div>04</div>
                                    <div>05</div>
                                    <div>06</div>
                                    <div>07</div>
                                    <div>08</div>
                                    <div>09</div>
                                    <div>10</div>
                                    <div>11</div>
                                    <div>12</div>
                                    <div>13</div>
                                    <div>14</div>
                                    <div>15</div>
                                    <div>16</div>
                                    <div>17</div>
                                    <div>18</div>
                                    <div>19</div>
                                    <div>20</div>
                                    <div>21</div>
                                    <div>22</div>
                                    <div>23</div>
                                    <div>24</div>
                                    <div>25</div>
                                    <div>26</div>
                                    <div>27</div>
                                    <div>28</div>
                                    <div>29</div>
                                    <div>30</div>
                                    <div>31</div>
                                    <div>32</div>
                                    <div>33</div>
                                    <div>34</div>
                                    <div>35</div>
                                    <div>36</div>
                                    <div>37</div>
                                    <div>38</div>
                                </td>
                                <td class= "code">
                                    <div class= "container">
                                        <div><code>&lt;div </code><code>class</code><code>=</code><code>"user_controls"</code><code>&gt;</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>&lt;?php </code><code>if</code> <code>(</code><code>$user</code> <code>= Current_User::user()): ?&gt;</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>Hello, &lt;em&gt;&lt;?php </code><code>echo</code> <code>$user</code><code>-&gt;username; ?&gt;&lt;/em&gt; &lt;br/&gt;</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>&lt;?php </code><code>echo</code> <code>anchor(</code><code>'logout'</code><code>, </code><code>'Logout'</code><code>); ?&gt;</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>&lt;?php </code><code>else</code><code>: ?&gt;</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>&lt;?php </code><code>echo</code> <code>anchor(</code><code>'login'</code><code>,</code><code>'Login'</code><code>); ?&gt; |</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>&lt;?php </code><code>echo</code> <code>anchor(</code><code>'signup'</code><code>, </code><code>'Register'</code><code>); ?&gt;</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>&lt;?php </code><code>endif</code><code>; ?&gt;</code></div>
                                        <div><code>&lt;/div&gt;</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>&lt;h1&gt;My Message Board&lt;/h1&gt;</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>&lt;?php </code><code>foreach</code><code>(</code><code>$categories</code> <code>as</code> <code>$category</code><code>): ?&gt;</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>&lt;div </code><code>class</code><code>=</code><code>"category"</code><code>&gt;</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>&lt;h2&gt;&lt;?php </code><code>echo</code> <code>$category</code><code>-&gt;title; ?&gt;&lt;/h2&gt;</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>&lt;?php </code><code>foreach</code><code>(</code><code>$category</code><code>-&gt;Forums </code><code>as</code> <code>$forum</code><code>): ?&gt;</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>&lt;div </code><code>class</code><code>=</code><code>"forum"</code><code>&gt;</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>&lt;h3&gt;</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>&lt;?php </code><code>echo</code> <code>anchor(</code><code>'forums/'</code><code>.</code><code>$forum</code><code>-&gt;id, </code><code>$forum</code><code>-&gt;title) ?&gt;</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>(&lt;?php </code><code>echo</code> <code>$forum</code><code>-&gt;Threads-&gt;</code><code>count</code><code>(); ?&gt; threads)</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>&lt;/h3&gt;</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>&lt;div </code><code>class</code><code>=</code><code>"description"</code><code>&gt;</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>&lt;?php </code><code>echo</code> <code>$forum</code><code>-&gt;description; ?&gt;</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>&lt;/div&gt;</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>&lt;/div&gt;</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>&lt;?php </code><code>endforeach</code><code>; ?&gt;</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>&lt;/div&gt;</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>&lt;?php </code><code>endforeach</code><code>; ?&gt;</code></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <p>This lets you avoid lots of curly braces. Also, the code looks and feels similar to the way HTML is structured and indented.</p>
            <h2>14 - Object Oriented vs. Procedural</h2>
            <p>Object oriented programming can help you create well structured code. But that does not mean you need to abandon procedural programming completely. Actually creating a mix of both styles can be good.</p>
            <p>Objects should be used for representing data, usually residing in a database. </p>
            <div>
                <div id= "highlighter_709983">
                    <table cellspacing= "0" cellpadding= "0" border= "0">
                        <tbody>
                            <tr>
                                <td class= "gutter">
                                    <div>01</div>
                                    <div>02</div>
                                    <div>03</div>
                                    <div>04</div>
                                    <div>05</div>
                                    <div>06</div>
                                    <div>07</div>
                                    <div>08</div>
                                    <div>09</div>
                                    <div>10</div>
                                    <div>11</div>
                                    <div>12</div>
                                    <div>13</div>
                                    <div>14</div>
                                    <div>15</div>
                                    <div>16</div>
                                    <div>17</div>
                                    <div>18</div>
                                    <div>19</div>
                                    <div>20</div>
                                    <div>21</div>
                                    <div>22</div>
                                    <div>23</div>
                                    <div>24</div>
                                </td>
                                <td class= "code">
                                    <div class= "container">
                                        <div><code>class</code> <code>User {</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>public</code> <code>$username</code><code>;</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>public</code> <code>$first_name</code><code>;</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>public</code> <code>$last_name</code><code>;</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>public</code> <code>$email</code><code>;</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>public</code> <code>function</code> <code>__construct() {</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>// ...</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>}</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>public</code> <code>function</code> <code>create() {</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>// ...</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>}</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>public</code> <code>function</code> <code>save() {</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>// ...</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>}</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>public</code> <code>function</code> <code>delete</code><code>() {</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code>// ...</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>}</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>}</code></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <p>Procedural functions may be used for specific tasks that can be performed independently.</p>
            <div>
                <div id= "highlighter_186293">
                    <table cellspacing= "0" cellpadding= "0" border= "0">
                        <tbody>
                            <tr>
                                <td class= "gutter">
                                    <div>1</div>
                                    <div>2</div>
                                    <div>3</div>
                                    <div>4</div>
                                    <div>5</div>
                                    <div>6</div>
                                    <div>7</div>
                                </td>
                                <td class= "code">
                                    <div class= "container">
                                        <div><code>function</code> <code>capitalize(</code><code>$string</code><code>) {</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>$ret</code> <code>= </code><code>strtoupper</code><code>(</code><code>$string</code><code>[0]);</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>$ret</code> <code>.= </code><code>strtolower</code><code>(</code><code>substr</code><code>(</code><code>$string</code><code>,1));</code></div>
                                        <div><code>&nbsp;&nbsp;&nbsp;&nbsp;</code><code>return</code> <code>$ret</code><code>;</code></div>
                                        <div>&nbsp;</div>
                                        <div><code>}</code></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h2>15 - Read Open Source Code</h2>
            <p>Open Source projects are built with the input of many developers. These projects need to maintain a high level of code readability so that the team can work together as efficiently as possible. Therefore, it is a good idea to browse through the source code of these projects to observe what these developers are doing.</p>
            <div><vue-img data-src= "https://cdn.tutsplus.com/net/uploads/legacy/516_code/open_source.png" class= "loaded" src= "https://cdn.tutsplus.com/net/uploads/legacy/516_code/open_source.png" data-was-processed= "true" /></div>
            <h2>16 - Code Refactoring</h2>
            <p>When you "refactor," you make changes to the code without changing any of its functionality. You can think of it like a "clean up," for the sake of improving readability and quality.</p>
            <p>This doesn't include bug fixes or the addition of any new functionality. You might refactor code that you have written the day before, while it's still fresh in your head, so that it is more readable and reusable when you may potentially look at it two months from now. As the motto says: "refactor early, refactor often."</p>
            <p>You may apply any of the "best practices" of code readability during the refactoring process.</p>
            <p> I hope you enjoyed this article! Any that I missed? Let me know via the comments. And if you want to improve your coding, there are lots of scripts and apps available to help you on <a href= "https://codecanyon.net/" target= "_self">Envato Market</a>. See what's <a href= "https://codecanyon.net/page/top_sellers" target= "_self">most popular this week</a>.</p>
        </div>
    </div>
</template>

<script>
import vueImg from "vue2-component-library"

    export default {
        name: 'navBestPractices',

        components: { vueImg } //components
    } //default
</script>

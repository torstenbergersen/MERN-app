import React from 'react';


function TopicsPage() {
    return (
        <>
        <h2 id="topTopic">Web Dev Concepts</h2>
        <nav class="local">
            <a href="#servers">Web Servers</a>
            <a href="#frontend">Frontend Design</a>
            <a href="#imageOptimization">Optimizing Images</a>
            <a href="#favicons">Favicons</a>
            <a href="#css">CSS</a>
            <a href="#forms">Forms</a>
            <a href="#node/npm/express">Node, npm, and Express</a>
            <a href="#javaScript">JavaScript</a>
        </nav>
        <article id="servers">
            <h3>Web Servers</h3>
            <p>
                The <strong>designated home page</strong>, often named as an index file (e.g., index.html), is the file that a <strong>web server</strong> serves by default when a <strong>client</strong> accesses the root ('<strong>/</strong>') <strong>URL</strong> of a website. This is done through a <strong>GET</strong> request. The server's configuration determines which file is recognized as the index file, and this file acts as the primary entry point to the website, providing the initial content and navigation for users. The web server has configuration settings that determine which file to serve as the index file. The <strong>Apache</strong> web server uses the default, index.html. On the <strong>Microsoft</strong> .NET platform, default.html is permitted. Otherwise, a server might search for index.js or index.php.
            </p>
            <p>
                In the browser's web dev/inspector network tab output screen, you can
                see detailed information about the files loaded by the webpage. These
                include the file name, the type of file <strong>(e.g., HTML, CSS, JavaScript, image, etc.)</strong>, the <strong>HTTP status code</strong>, the size of the file, the <strong>IP</strong>, the <strong>method</strong>, the policy, the language, the time taken to load, and the timeline, which is a visual representation of the file's loading time. It will also include response and request <strong>header data</strong>, which will be more detailed when viewed from the server. When viewed on the server, the response header will include information on caching, content type and length, dates, and the server. The request header will provide information about the language, cache, connection, the host, modification dates, and platform. The <strong>status line</strong> has the format "HTTP/Version Status-code Reason-phrase" and indicates whether an HTTP <strong>request</strong> was successful or encountered an error. The status codes are 3-digit numbers, and their category can be inferred from the first digit. The request method shows <strong>GET</strong> for the general request method, which indicates that we are retrieving data from the page. When viewed from a web server, the file's details may also include the type of web server serving the file, the instructions for <strong>caching</strong> the file in the browser, and the date and time when the file was last modified. If viewed on the local computer, you could see the file path, the file size, and the date and time it was last accessed on the local computer. Overall, the main difference is in the server configuration and caching details provided by the web server view.
            </p>
            <p>
                The favicon.ico file has a status code of <strong>200</strong> because it was successfully retrieved by the server. Any code between 200-299 indicates a successful response. The main.css and main.js files were "not found", because they are missing or incorrectly referenced in the server's directory, leading to the <strong>404</strong> status code. Any code between 400-409 indicates a client error.
            </p>
            <p>
                https:// is the <strong>scheme</strong> of the web server's URL. The scheme identifies the protocol the web client will use to request the resource. This scheme is like http (<strong>hypertext transfer protocol</strong>), but it encrypts the data being sent between the client and the server. web.engr is the <strong>subdomain</strong>, while oregonstate.edu is the <strong>host domain</strong>. Oregonstate.edu is mapped to the <strong>IP</strong> address for that domain, while web.engr is a subsection of the domain. /~bergerst/a1-bergerst/ is the <strong>path to the resource</strong>. This is the physical location of the file on the Web. The final '/' implies the path /index.html, which is the designated homepage of the web server.
            </p>
        </article>
        <article id="frontend">
            <h3>Frontend Design</h3>
            <p>
                <strong>Frontend design</strong> is a critical component of web development, focusing on crafting an engaging and user-friendly interface that provides the most suitable experience for users. It involves the creation of the site's visual design, which includes the layout, color scheme, and typography, all of which contribute to the site's overall look and feel and establish its brand identity. Additionally, the graphical user interface (GUI) encompasses interactive elements like buttons, menus, and sliders, which should be intuitive and easy to navigate. The interactive experience further enhances user engagement through dynamic elements such as animations and transitions. Consistency across all pages and elements is crucial for <strong>usability</strong> and brand recognition, while well-designed navigation systems ensure that users can move through the site with ease. Moreover, it is important to stay up to date with the latest trends, so that the user is met with a familiar and modern page. Ultimately, frontend design is about striking a balance between aesthetics and functionality, ensuring that the site is visually appealing while also being enjoyable and easy to use.
            </p>
            <h4>Five "E"s of usability</h4>
            <dl>
                <dt><strong>Effective</strong></dt>
                <dd>Will the website help users attain what they came to it for? Will it provide accurate and helpful information?</dd>
                <dt><strong>Efficient</strong></dt>
                <dd>How quickly can user gather the information or complete their task? The website should not slow down the user.</dd>
                <dt><strong>Easy to navigate</strong></dt>
                <dd>Is the layout intuitive? Can all important information and/or services be easily accessed? Nothing should be hidden, and any path should be easy to remember.</dd>
                <dt><strong>Error-free</strong></dt>
                <dd>Essential for accessibility and ease of access, an error free website will not hinder the user. Any error may inhibit a user's ability to meet a goal, which is detrimental to the effectiveness of a website.</dd>
                <dt><strong>Enjoyable/Engaging</strong></dt>
                <dd>Is the design and content suitable and appealing? The user should not be distracted or annoyed when using a website. If every facet of the website has been engineered to adhere to the previous four usability principles, a user will be inclined to advocate further use of the website.</dd>
            </dl>
            <p>
                The &lt;<strong>header</strong>&gt; tag is used to display the banner for a website or app. It often includes a website's logo, navigation links, and title or slogan. The header will remain the same between pages and should take up as little space as possible. The &lt;<strong>nav</strong>&gt; tag defines a section containing links to other pages or sections within the same page. It is used to create menus and navigation bars. The &lt;<strong>main</strong>&gt; tag specifies the main content of a webpage. It should only be used once per page. The &lt;<strong>section</strong>&gt; tag is used to group related content. Each section typically has its own &lt;<strong>h1</strong>&gt; heading and represents a thematic grouping of content. It should be used if all the content is related. The &lt;<strong>article</strong>&gt; tag is usually used within a &lt;<strong>section</strong>&gt; tag and implies a self-contained, independent topic with a &lt;<strong>h2</strong>&gt; heading. If multiple &lt;<strong>article</strong>&gt; tags appear within a section, they will often include <strong>ID</strong> selectors, for styling and anchor purposes. The &lt;<strong>aside</strong>&gt; tag defines content that is tangentially related to the main content, such as sidebars, call-out boxes, or additional information. It is often used for content that is not essential to the main text but provides additional context or information. The &lt;<strong>figure</strong>&gt; tag is used to represent self-contained content like illustrations, diagrams, photos, code listings, etc., often accompanied by a caption provided by the &lt;<strong>figcaption</strong>&gt; tag. The &lt;<strong>blockquote</strong>&gt; tag is used for longer quotations, or text/quotations from another source. It is visually different to help it stand out. The &lt;<strong>footer</strong>&gt; tag defines the footer of a document or section, which often contains information like copyright notices, contact information, or links to privacy policies and terms of use. The &lt;<strong>div</strong>&gt; tag is a generic container used to group together elements for styling purposes (using CSS) or for applying JavaScript behaviors. It does not inherently represent anything specific, but is useful for creating structure in a document.
            </p>
            <h4>Anchor Links &lt;<strong>a</strong>&gt; (hyperlinks from one item to another)</h4>
            <ol>
                <li>External Anchor: With an external anchor, the <strong>href</strong> attribute in the first part of the &lt;<strong>a</strong>&gt; tag defines the <strong>URL</strong> to access when selected, while the text within the tag describes the link.</li>
                <li>Internal Anchor: To link from one item to another within the same page, one uses the &lt;<strong>a</strong>&gt; tag with <strong>IDs</strong>. The href attribute will include a # followed by the ID of the element that is the intended destination.</li>
                <li>Navigation: &lt;<strong>a</strong>&gt; tags can also be used for global or local navigation. With this method, the &lt;<strong>a</strong>&gt; tag is used within a &lt;<strong>nav</strong>&gt; tag. For global applications, the user can click from one page to another, and with local use, the user can use the tags to navigate to articles on the current or local page.</li>
            </ol>
        </article>
        <article id="imageOptimization">
            <h3>Optimizing Images</h3>
            <p>
                A descriptive file name is essential when implementing images on the web. A descriptive file name improves <strong>search engine optimization (SEO)</strong> by helping search engines categorize and display your images alongside related content. Small image file sizes help improve load time on a webpage. You can compress your images to achieve smaller sizes using <strong>lossless compression</strong>, and also add specification with the <strong>src</strong> and <strong>sizes</strong> attribute to serve high resolution images only to high resolution devices. Tailoring your image's dimension to that of the space of your webpage will help lower load times. Using the correct file format is important to optimizing your image. For photos, use <strong>.JPG</strong> or <strong>.WebP</strong>, for line art like logos and icons, use <strong>.GIF</strong>, <strong>.SVG</strong> or <strong>.PNG</strong>. If you want graphics with transparency, use 24-bit .PNG. Provide multiple resolution sizes to accommodate various monitor <strong>PPI</strong>'s will help improve the appearance of your webpage on a wider range of devices. Your image must be in the proper <strong>color mode</strong> for optimization. For .PNG, .JPG, .SVG, and .WebP, use <strong>RGB</strong>, for .GIF and sometimes .PNG, use <strong>indexed</strong>.
            </p>
            <p>
                .SVG, or <strong>scalable vector graphics</strong>, can be a used for 2D, interactive, or animated images. .GIF files are best for <strong>in-line graphics</strong>. Often, short photo or video sequences are saved as animated .GIF files. .PNG files have an <strong>alpha channel</strong>, giving them true <strong>transparency</strong>. Their color mode is usually RBG but can be compressed into Index. .JPG is specifically for photographic images. It will usually be necessary, due to the extensive detail in most photos, to resize and compress .JPG files. Finally, .WebP files can also be used for photographic images. They can be compressed smaller than .JPG's, but may have worse quality. WebP and can have an alpha channel for transparency.
            </p>
        </article>
        <article id="favicons">
            <h3>Favicons</h3>
            <p>
                <strong>Favicons</strong>, or favorite icons, are crucial for enhancing user experience and brand recognition across various digital platforms. They appear in browser tabs, aiding users in identifying and navigating between multiple open sites. When users bookmark web pages, browsers utilize favicons in the bookmarks list for quick visual identification. They also feature in browsing histories, address bars, and search engine results, further establishing a website's visual identity. On mobile devices, favicons are used for home screen shortcuts, resembling app icons, and are visible in app switchers and push notifications. To ensure optimal display and functionality, favicons must be created in multiple sizes and formats to accommodate different devices and resolutions.
            </p>
        </article>
        <article id="css">
            <h3>Cascading Styleshets</h3>
            <p>
                Stylesheets, particularly <strong>Cascading Style Sheets (CSS)</strong>, are crucial for web development because they separate content from design, allowing for better visual presentation across different web pages. By using stylesheets, developers can ensure consistent styling throughout a website or app, which enhances user experience by providing a uniform interface. Stylesheets also enable responsive design, which is essential for making websites look good on a variety of devices. Moreover, they improve web performance by reducing the need for <strong>inline styling</strong>, which can significantly decrease page loading times. Overall, stylesheets are fundamental for creating visually appealing, consistent, and efficient web applications and websites.
            </p>
            <p>
                Styles can be integrated into a website using several methods, each suitable for different scenarios. The most efficient approach is to use an <strong>external stylesheet</strong>, where CSS rules are stored in a file with a .css extension. These stylesheets are linked to the HTML document via a &lt;<strong>link</strong>&gt; tag placed in the &lt;<strong>head</strong>&gt; section. Additional component-specific stylesheets can either be linked similarly or included using the <strong>@import</strong> directive within the main stylesheet. This method ensures uniformity and ease of maintenance across all pages of a website. For minor, specific style adjustments, you can <strong>embed</strong> styles directly within an HTML document using a &lt;<strong>style</strong>&gt;tag. Alternatively, styles can be applied directly to individual elements using an <strong>attribute</strong> within the element's tag. Lastly, for dynamic style changes, JavaScript can be employed to manipulate the <strong>DOM</strong>. This allows for real-time styling changes in response to user interactions or other events, making it a powerful tool for interactive web applications. 
            </p>
        </article>
        <article id="forms">
            <h3>Forms</h3>
            <p>
                Accessible forms are designed to enhance usability for all users. To achieve this, it is important to provide clear instructions both above the form and within the labels, noting that placeholder values mainly assist those with good vision. Users should be informed about the purpose of the data collection and which fields are mandatory. Setting the first field to autofocus allows users to begin inputting data immediately without needing to use a mouse. Additionally, every form control should be operable via keyboard to accommodate individuals who do not or cannot use a mouse or trackpad. For complex forms, adding tab indexing helps clarify the order in which fields should be completed. Finally, it is crucial to ensure that validation messages are readable by screen readers, as the default validation messages provided by HTML browsers do not meet this accessibility standard.
            </p>
            <p>
                Forms are constructed using a variety of tags, each serving specific purposes to enhance functionality and user interaction. The &lt;<strong>form</strong>&gt; tag is the foundation of any HTML form, defining where and how data should be submitted. The action attribute specifies the URL to which the form data will be sent upon submission, while the method attribute indicates whether the HTTP GET or POST method will be used. Nested within forms, the &lt;<strong>fieldset</strong>&gt; tag is used to group related elements, making complex forms easier to navigate and understand. This is particularly useful for long forms or forms that cover multiple topics. The &lt;<strong>legend</strong>&gt; tag, used within a &lt;<strong>fieldset</strong>&gt;, provides a caption or heading for these groups, aiding both in accessibility and in providing clear, visual organization of the form's sections. The &lt;<strong>label</strong>&gt; tag improves form accessibility by defining descriptions for &lt;<strong>input</strong>&gt; elements. The for attribute within &lt;<strong>label</strong>&gt; should match the id of the corresponding input, creating a clickable label that focuses on or activates the associated input element. This enhances usability, especially for those using assistive technologies. The &lt;<strong>input</strong>&gt; tag is the workhorse of form elements, adaptable to various types of data input dictated by the type attribute—ranging from text and passwords to dates and color pickers. Attributes like name and placeholder provide essential information for both the server (identifying the data) and the user (guiding input). The required attribute can enforce the completion of crucial fields before submission. For options and selections, the &lt;<strong>select</strong>&gt; tag, containing one or more &lt;<strong>option</strong>&gt; elements, allows users to choose from a dropdown list. Each &lt;<strong>option</strong>&gt; has a value attribute, which is the data sent when submitted. The select can also be made to accept multiple selections if the multiple attribute is used. The &lt;<strong>textarea</strong>&gt; tag caters to inputs requiring longer, multiline text, such as comments or addresses. Lastly, the &lt;<strong>button</strong>&gt; tag defines clickable buttons, crucial for form operations. The type attribute is significant here, determining whether the button submits the form, resets it, or performs another action defined by a script. 
            </p>
            <p>
                To enhance the usability and accessibility of web forms, particularly for mobile users, several CSS styling recommendations are crucial. First, adjusting the fieldset elements with custom border properties, margin, and padding improves visual clarity and structure, making the grouped elements easier to navigate. The legend is styled distinctly to differentiate it from other text, aiding in the quick identification of grouped content. Labels are positioned above their corresponding form controls, improving layout consistency and readability. Inputs, buttons, textareas, and selects are modified to accommodate a larger fingertip size, with increased padding and font size, ensuring easier interaction for all users, including those with limited dexterity. Visual cues like color changes on :focus and borders for :required fields help users navigate the form by clearly indicating active elements and essential fields. Additionally, modifying the appearance of checkboxes and radio buttons upon interaction, and enabling or disabling form elements based on user inputs, further enhance the user experience by providing clear, visual feedback on their actions. These styling choices not only improve the aesthetic appeal of forms but also significantly boost their functional accessibility and user-friendliness.
            </p>
        </article>
        <article id="node/npm/express">
            <h3>Node, npm, and Express</h3>
            <p>
                Node.js, npm, and Express.js are three core technologies that streamline and enhance web development. Node.js is a JavaScript runtime environment that allows you to execute JavaScript on the server side, enabling the development of scalable network applications. npm (Node Package Manager) is the default package manager for Node.js, providing a vast repository of libraries and tools that can be easily integrated into projects to add functionality and reduce development time. Express.js is a minimalist web framework for Node.js, designed to make building web applications and APIs more straightforward and efficient through its routing capabilities and middleware support. Together, these technologies create a powerful trifecta that simplifies the development of fast, scalable, and maintainable web applications. By leveraging Node.js for server-side logic, npm for managing dependencies, and Express.js for routing and middleware, one can improve productivity and decrease development time. 
            </p>
        </article>
        <article id="javaScript">
            <h3>JavaScript</h3>
            <p>
                In JavaScript, the main data types can be divided into <strong>primitive types</strong> and <strong>object types</strong>. The primitive types include <strong>undefined</strong>, <strong>null</strong>, <strong>boolean</strong>, <strong>number</strong>, and <strong>string</strong>. These represent simple values like true/false, numbers, text, and unique identifiers. Additionally, JavaScript supports <strong>objects</strong> as a complex data type, which can include arrays, functions, and more complex structures. Objects are used to store collections of data and more complex entities. 
            </p>
            <p>
                In JavaScript, objects are collections of properties, where each property is a <strong>key-value pair</strong>. Objects are used to store various keyed collections and more complex entities. <strong>Arrays</strong> are special kinds of objects that store lists of items, accessible by numerical indices. They are used to hold sequences of values and provide methods for iteration and manipulation. <strong>JSON</strong> (JavaScript Object Notation) is a lightweight data-interchange format that uses human-readable text to represent simple data structures and associative arrays (called objects in JavaScript). It's commonly used to transmit data between a server and web applications as text.
            </p>
            <p>
                <strong>Conditionals</strong> in JavaScript, such as if, else if, else, and switch, allow the execution of different sections of code based on different conditions. They are fundamental for decision-making in code. <strong>Loops</strong>, such as for, while, and do-while, are used to repeat a block of code multiple times, which is useful for tasks that require repetitive actions, such as iterating over arrays or processing data until a condition is met.
            </p>
            <p>
                <strong>Object-oriented programming</strong> (OOP) in JavaScript is a programming paradigm based on the concept of "objects", which can contain data, in the form of fields (often known as attributes or properties), and code, in the form of functions (often known as methods). In JavaScript, OOP is implemented using <strong>prototypes</strong> rather than classical "<strong>classes</strong>" (though a class syntax has recently been implemented over JavaScript's existing prototype-based inheritance). This style of programming encourages the <strong>encapsulation</strong> of code and data together and can be used to model complex behaviors and relationships between entities.
            </p>
            <p>
                <strong>Functional programming</strong> (FP) is a programming paradigm in JavaScript that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data. It emphasizes the application of functions, often as arguments or returns from other functions. FP can help in writing clean, modular code, as it encourages breaking the application into small, pure functions. JavaScript supports several features of functional programming, including <strong>first-class functions</strong>, higher-order functions, and functions like <strong>map()</strong>, <strong>reduce()</strong>, and <strong>filter()</strong> for arrays, which facilitate functional techniques.
            </p>
            <p>
            <a href="#topTopic">Back to Top</a>
            </p>
        </article>
    </>
    );
}

export default TopicsPage;

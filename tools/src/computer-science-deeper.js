// More Computer Science questions (AQA 8525): the new units 3.6 Networks, 3.7 Cyber security, 3.8 Databases and SQL,
// plus extra depth on 3.1-3.5 and 3.9.
// [topic, question, correct answer, [3 wrong answers], one-line explanation]
module.exports = {
  subject: 'Computer Science',
  qs: [
    // ---------- 3.1 Fundamentals of algorithms ----------
    [`Representing algorithms`, `Which flowchart symbol is used for a decision?`, `Diamond`, [`Rectangle`, `Parallelogram`, `Rounded rectangle`], `A rectangle is a process, a parallelogram is input/output, a rounded rectangle is start/stop.`],
    [`Representing algorithms`, `What is the purpose of a trace table?`, `To follow the values of variables as an algorithm runs and find errors`, [`To draw a flowchart`, `To store data in a database`, `To compile code`], `It records each variable's value after every step.`],
    [`Decomposition and abstraction`, `Why is abstraction useful when designing a program?`, `It removes unnecessary detail so you can focus on what matters`, [`It makes the program slower`, `It adds more detail`, `It converts code into machine code`], `An example is a tube map.`],
    [`Searching algorithms`, `A binary search is used to find 11 in the list 1, 3, 5, 7, 9, 11, 13. Which value is checked first?`, `7`, [`1`, `11`, `13`], `The middle item is checked first, then the correct half.`],
    [`Searching algorithms`, `What is an advantage of binary search over linear search?`, `It is usually much faster for large sorted lists`, [`It works on unsorted lists`, `It checks every item`, `It is easier to write`], `It halves the search area each time.`],
    [`Sorting algorithms`, `In a bubble sort, what happens in each pass?`, `Neighbouring items are compared and swapped if in the wrong order`, [`The list is split in half`, `The smallest item is moved to the front`, `Items are chosen at random`], `The sort stops when a pass has no swaps.`],
    [`Sorting algorithms`, `Which sorting algorithm uses a divide and conquer approach?`, `Merge sort`, [`Bubble sort`, `Linear search`, `Binary search`], `It splits the list repeatedly, then merges the sorted pieces.`],

    // ---------- 3.2 Programming ----------
    [`Data types`, `Which data type would you use to store a name?`, `String`, [`Integer`, `Real`, `Boolean`], `Whole numbers are integers; decimals are reals.`],
    [`Data types`, `What does casting do?`, `Converts a value from one data type to another`, [`Deletes a variable`, `Creates a constant`, `Stores data in a file`], `For example converting the string "5" to the integer 5.`],
    [`Programming concepts`, `What is the difference between a variable and a constant?`, `A variable's value can change while the program runs; a constant's cannot`, [`A constant can change`, `They are the same`, `A variable stores only text`], `Constants are used for values like VAT.`],
    [`Programming concepts`, `Which loop repeats a set number of times?`, `FOR loop (count-controlled)`, [`WHILE loop (condition-controlled)`, `IF statement`, `SELECT CASE`], `A WHILE loop runs while a condition is true.`],
    [`Data structures`, `What is a 2D array?`, `An array of arrays, such as a table with rows and columns`, [`A list of one item`, `A file`, `A single variable`], `For example, grid[2][3].`],
    [`Data structures`, `What is a record?`, `A collection of related fields that can be of different data types`, [`A list of the same data type`, `A sound file`, `A type of loop`], `For example a student's name, age and grade.`],
    [`Subroutines (procedures and functions)`, `What is returned by a function?`, `A value`, [`Nothing`, `A procedure`, `A program`], `A procedure does not return a value.`],
    [`Structured programming and passing data`, `Why are local variables useful?`, `They only exist inside their subroutine, so they don't clash with other parts of the program`, [`They are shared by every subroutine`, `They use more memory`, `They can't be changed`], `Global variables can be used anywhere.`],
    [`Robust and secure programming`, `A valid range is 1 to 10. Which pair are boundary test data values?`, `1 and 10 (and 0 and 11)`, [`5 and 6`, `-100 and 100`, `2 and 9`], `Boundary data tests the edges of a valid range.`],
    [`Robust and secure programming`, `What is a logic error?`, `The program runs but gives incorrect results`, [`The program will not run`, `A spelling mistake in code`, `A missing bracket`], `A syntax error stops the program running.`],
    [`Classification of programming languages`, `Which is an advantage of a high-level language?`, `It is easier to read, write and debug`, [`It runs directly on the processor`, `It is always faster`, `It is specific to one processor`], `Low-level languages are closer to the machine.`],
    [`Classification of programming languages`, `What does an assembler do?`, `Translates assembly language into machine code`, [`Translates high-level code line by line`, `Translates the whole high-level program`, `Corrects errors`], `Compilers and interpreters translate high-level languages.`],

    // ---------- 3.3 Data representation ----------
    [`Number bases`, `What is binary 10110 in denary?`, `22`, [`26`, `18`, `32`], `16 + 4 + 2 = 22.`],
    [`Number bases`, `What is the largest number that can be stored in 8 bits?`, `255`, [`256`, `128`, `127`], `2⁸ − 1 = 255.`],
    [`Converting between bases`, `What is hexadecimal A5 in denary?`, `165`, [`105`, `85`, `155`], `10 × 16 + 5 = 165.`],
    [`Converting between bases`, `What is binary 11010110 in hexadecimal?`, `D6`, [`B6`, `D8`, `C6`], `1101 = D and 0110 = 6.`],
    [`Units of information`, `How many bytes are in a megabyte (AQA specification)?`, `1 000 000`, [`1024`, `1 048 576`, `1000`], `AQA uses decimal prefixes.`],
    [`Binary arithmetic and shifts`, `What does a left shift by 2 do to a binary number?`, `Multiplies it by 4`, [`Divides it by 4`, `Multiplies it by 2`, `Adds 2`], `Each left shift multiplies by 2.`],
    [`Character encoding`, `In ASCII, how many characters can be represented using 7 bits?`, `128`, [`256`, `64`, `65 536`], `2⁷ = 128.`],
    [`Character encoding`, `If A is 65 in ASCII, what is C?`, `67`, [`66`, `68`, `97`], `The codes are sequential.`],
    [`Representing images`, `A 100 × 100 pixel image uses 8 bits per pixel. What is its file size in bytes?`, `10 000`, [`80 000`, `1250`, `100 000`], `10 000 pixels × 8 bits = 80 000 bits = 10 000 bytes.`],
    [`Representing sound`, `What does a higher bit depth do to a sound file?`, `Increases quality and file size`, [`Reduces quality`, `Reduces file size`, `Has no effect`], `More bits give more precise sample values.`],
    [`Data compression`, `Using run length encoding, how can AAAABBB be stored?`, `4A3B`, [`A4B3`, `7AB`, `AAAA3B`], `Count then value.`],

    // ---------- 3.4 Computer systems ----------
    [`Boolean logic`, `What is the output of NOT (A AND B) if A = 1 and B = 1?`, `0`, [`1`, `2`, `Undefined`], `A AND B = 1, and NOT 1 = 0.`],
    [`Boolean logic`, `What is the output of (A OR B) AND NOT C when A = 1, B = 0 and C = 1?`, `0`, [`1`, `2`, `Undefined`], `(1 OR 0) = 1; NOT 1 = 0; 1 AND 0 = 0.`],
    [`Systems software`, `Which is a function of the operating system?`, `Managing memory and files`, [`Creating spreadsheets`, `Editing photos`, `Browsing the web`], `It also handles peripherals, multitasking and the user interface.`],
    [`Systems software`, `What does defragmentation do?`, `Reorganises files on a hard disk so they are stored together`, [`Deletes viruses`, `Encrypts files`, `Compresses files`], `It speeds up access on magnetic hard disks.`],

    // ---------- 3.5 Systems architecture ----------
    [`Von Neumann architecture`, `Which part of the CPU carries out calculations and logic operations?`, `The ALU`, [`The control unit`, `The cache`, `The MAR`], `The control unit decodes instructions and coordinates the CPU.`],
    [`Von Neumann architecture`, `What does the Program Counter (PC) hold?`, `The address of the next instruction`, [`The current instruction`, `The result of a calculation`, `The data to be written`], `It increments after each fetch.`],
    [`CPU performance`, `Which of these is NOT a factor affecting CPU performance?`, `Screen resolution`, [`Clock speed`, `Number of cores`, `Cache size`], `More cores can run more instructions at once.`],
    [`Memory and storage`, `Which type of memory is volatile?`, `RAM`, [`ROM`, `Flash memory`, `A hard disk`], `Volatile memory loses its data when power is off.`],
    [`Memory and storage`, `Which is an advantage of solid-state storage over magnetic storage?`, `It has no moving parts so is faster and more durable`, [`It is always cheaper per GB`, `It has a larger capacity`, `It can be written to only once`], `Magnetic disks have moving parts.`],

    // ---------- 3.6 Fundamentals of computer networks ----------
    [`Networks and their benefits`, `What is a LAN?`, `A network covering a small geographical area, such as a school`, [`A network across a country`, `A wireless router`, `The internet`], `A WAN covers a large area.`],
    [`Networks and their benefits`, `Which is a benefit of networking computers?`, `Sharing files and resources such as printers`, [`Slower communication`, `Fewer security issues`, `Higher power use`], `Central backup and management are also benefits.`],
    [`Networks and their benefits`, `What is the main feature of a client-server network?`, `A central server provides files and services to the client computers`, [`Every computer is equal and shares directly`, `There are no servers`, `It cannot be backed up`], `Peer-to-peer networks have no central server.`],
    [`Network topologies`, `In a star network, what happens if the central switch fails?`, `The whole network stops working`, [`Only one computer is affected`, `Nothing changes`, `Data takes another route`], `If a single cable fails, only that device is affected.`],
    [`Network topologies`, `Which topology has all devices connected to a single backbone cable?`, `Bus`, [`Star`, `Ring`, `Mesh`], `It can suffer from data collisions.`],
    [`Protocols and layers`, `What is a network protocol?`, `A set of rules for how data is sent and received`, [`A type of cable`, `A wireless router`, `A hardware address`], `Examples: HTTP, HTTPS, FTP, SMTP.`],
    [`Protocols and layers`, `Which protocol is used to send email?`, `SMTP`, [`FTP`, `HTTP`, `IMAP`], `IMAP is used to retrieve email.`],
    [`Protocols and layers`, `What does TCP do?`, `Splits data into packets and makes sure they arrive and are reassembled in order`, [`Gives devices IP addresses`, `Encrypts websites`, `Translates domain names`], `IP is responsible for addressing and routing.`],
    [`Protocols and layers`, `What information does a data packet contain?`, `The source and destination address, a packet number and the data`, [`Only the data`, `A password`, `The user's name`], `Packets can take different routes.`],
    [`Protocols and layers`, `What does DNS do?`, `Translates a domain name into an IP address`, [`Encrypts web traffic`, `Assigns MAC addresses`, `Sends email`], `You type a name; the computer needs an IP address.`],
    [`Protocols and layers`, `Which is the order of the four-layer TCP/IP model, from top to bottom?`, `Application, Transport, Internet (Network), Link`, [`Link, Internet, Transport, Application`, `Application, Internet, Transport, Link`, `Transport, Application, Link, Internet`], `Each layer has its own protocols.`],
    [`Network security`, `What does a firewall do?`, `Monitors and blocks unauthorised network traffic`, [`Speeds up the network`, `Stores backups`, `Removes viruses from files`], `It checks incoming and outgoing packets.`],
    [`Network security`, `What is the purpose of encryption?`, `To scramble data so it cannot be understood if intercepted`, [`To compress data`, `To delete data`, `To speed up transmission`], `Only someone with the key can decrypt it.`],

    // ---------- 3.7 Cyber security ----------
    [`Cyber security threats`, `What is phishing?`, `Fake emails or messages that trick people into revealing personal information`, [`A virus that deletes files`, `Guessing passwords`, `Flooding a server`], `A type of social engineering.`],
    [`Cyber security threats`, `What is a brute-force attack?`, `Trying many possible passwords until the right one is found`, [`Sending a fake email`, `Watching someone enter a PIN`, `Flooding a website`], `Strong passwords make it harder.`],
    [`Cyber security threats`, `What happens in a denial-of-service (DoS) attack?`, `A server is flooded with requests so legitimate users cannot access it`, [`Data is quietly stolen`, `A password is guessed`, `Files are encrypted for ransom`], `A DDoS uses many computers.`],
    [`Cyber security threats`, `What does ransomware do?`, `Encrypts files and demands payment to unlock them`, [`Records keystrokes`, `Floods a server`, `Sends spam`], `It is a type of malware.`],
    [`Cyber security threats`, `What is shouldering (shoulder surfing)?`, `Watching someone enter their PIN or password`, [`Guessing passwords`, `Sending phishing emails`, `Installing a virus`], `A type of social engineering.`],
    [`Cyber security threats`, `What is SQL injection?`, `Entering SQL code into an input to access or damage a database`, [`Flooding a server`, `Guessing a password`, `Intercepting a phone call`], `Input validation helps to prevent it.`],
    [`Penetration testing`, `What is penetration testing?`, `Authorised attempts to find weaknesses in a system's security`, [`Illegal hacking`, `Installing anti-virus`, `Deleting old files`], `Weaknesses can then be fixed before criminals use them.`],
    [`Penetration testing`, `What is a "white-box" penetration test?`, `A test where the tester knows details of the system's structure`, [`A test with no knowledge of the system`, `A test using a firewall`, `A physical break-in`], `Black-box testers have no inside knowledge.`],
    [`Detecting and preventing threats`, `Which measure helps protect against malware?`, `Anti-malware software`, [`Reusing passwords`, `Opening all attachments`, `Disabling the firewall`], `Keep software updated, too.`],
    [`Detecting and preventing threats`, `Why are user access levels used?`, `To restrict who can see or change certain data`, [`To make the network faster`, `To compress files`, `To stop spam`], `Only authorised users can access sensitive files.`],
    [`Detecting and preventing threats`, `Which is an example of biometric authentication?`, `A fingerprint scan`, [`A password`, `A PIN`, `A security question`], `It uses a unique physical feature.`],

    // ---------- 3.8 Relational databases and SQL ----------
    [`Relational databases`, `What is a primary key?`, `A field that uniquely identifies each record in a table`, [`A password for the database`, `The first field in a table`, `A field that repeats data`], `For example, a StudentID.`],
    [`Relational databases`, `What is a foreign key?`, `A field in one table that links to the primary key in another table`, [`A key used to encrypt the database`, `A duplicate primary key`, `The last field in a table`], `It creates the relationship between tables.`],
    [`Relational databases`, `What is an advantage of a relational database over a flat-file database?`, `It reduces data redundancy and inconsistency`, [`It stores everything in one table`, `It is always simpler`, `It needs no keys`], `Data is stored once and linked.`],
    [`Relational databases`, `In a database table, what is a record?`, `One row of data about a single item`, [`One column`, `The name of a table`, `A data type`], `A field is a single column, such as Surname.`],
    [`SQL`, `Which SQL statement retrieves the Name field from the Students table?`, `SELECT Name FROM Students`, [`GET Name FROM Students`, `SELECT Students FROM Name`, `FIND Name IN Students`], `SELECT ... FROM ... WHERE is the main pattern.`],
    [`SQL`, `What does this do? SELECT * FROM Students WHERE Age > 15`, `Retrieves all fields for students older than 15`, [`Deletes students older than 15`, `Updates the age to 15`, `Counts the students`], `* means all fields.`],
    [`SQL`, `Which keyword sorts the results of a query?`, `ORDER BY`, [`GROUP BY`, `SORT FROM`, `WHERE`], `ASC or DESC sets the direction.`],
    [`SQL`, `Which SQL statement adds a new record?`, `INSERT INTO`, [`ADD TO`, `UPDATE`, `SELECT`], `For example INSERT INTO Students (Name, Age) VALUES ('Ali', 15).`],
    [`SQL`, `What does the SQL command UPDATE do?`, `Changes the data in existing records`, [`Adds a new table`, `Removes a table`, `Selects data`], `Use WHERE to say which records.`],
    [`SQL`, `What does the % wildcard do in LIKE 'A%'?`, `Matches any text that starts with A`, [`Matches only the letter A`, `Matches 100%`, `Matches any text that ends with A`], `% stands for any number of characters.`],

    // ---------- 3.9 Ethical, legal and environmental impacts ----------
    [`Legislation`, `Which law makes it illegal to access computer data without permission?`, `The Computer Misuse Act 1990`, [`The Data Protection Act`, `The Copyright, Designs and Patents Act`, `The Freedom of Information Act`], `It covers hacking, spreading malware and unauthorised changes.`],
    [`Legislation`, `Which of these is a principle of the Data Protection Act 2018?`, `Data must be accurate and kept no longer than necessary`, [`Data can be shared with anyone`, `Data must never be stored`, `Data can be used for any purpose`], `It protects personal data.`],
    [`Ethical and cultural issues`, `Which is a privacy concern about technology?`, `Companies collecting and selling personal data`, [`Faster internet`, `Cheaper phones`, `Better batteries`], `Users should know how their data is used.`],
    [`Environmental issues`, `What is e-waste?`, `Discarded electronic devices, which can contain harmful materials`, [`Email spam`, `Unused software`, `Old files`], `Recycling reduces the impact.`]
  ]
};

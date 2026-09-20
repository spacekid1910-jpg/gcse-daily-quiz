// [topic, question, correct answer, [3 wrong answers], one-line explanation]
module.exports = {
  subject: 'Computer Science',
  qs: [
    // ---------- 3.1 Fundamentals of algorithms ----------
    [`Representing algorithms`, `What is an algorithm?`, `A step-by-step set of instructions to solve a problem`, [`A programming language`, `A type of hardware`, `A file format`], `Algorithms can be shown as pseudo-code or flowcharts.`],
    [`Representing algorithms`, `Which is a way of representing an algorithm?`, `A flowchart`, [`A compiler`, `A bitmap`, `A router`], `Pseudo-code is another way.`],

    [`Decomposition and abstraction`, `What is decomposition?`, `Breaking a problem down into smaller, more manageable sub-problems`, [`Removing unnecessary detail`, `Repeating a set of instructions`, `Converting code into machine code`], `Abstraction is hiding unnecessary detail.`],
    [`Decomposition and abstraction`, `What is abstraction?`, `Removing unnecessary detail to focus on what matters`, [`Splitting a program into files`, `Fixing errors in code`, `Making code run faster`], `A tube map is an abstraction of a real map.`],

    [`Searching algorithms`, `A binary search can only be used on a list that is...`, `Sorted`, [`Very short`, `Numeric only`, `Unsorted`], `It repeatedly halves the search area.`],
    [`Searching algorithms`, `How does a linear search work?`, `It checks each item in turn from the start`, [`It starts at the middle and halves the list`, `It sorts the list first`, `It starts at the end only`], `It works on unsorted lists but is slow for large lists.`],

    [`Sorting algorithms`, `How does a bubble sort work?`, `It compares adjacent items and swaps them if they are in the wrong order`, [`It splits the list into halves and merges them`, `It finds the smallest item and moves it first only`, `It inserts each item into a new list`], `It repeats until no swaps are needed.`],
    [`Sorting algorithms`, `How does a merge sort work?`, `It repeatedly splits the list into halves, then merges the sorted halves`, [`It swaps adjacent items repeatedly`, `It checks each item in turn`, `It guesses the order`], `It is generally faster than bubble sort for large lists.`],

    // ---------- 3.2 Programming ----------
    [`Data types`, `Which data type would you use to store 3.14?`, `Real (float)`, [`Integer`, `Boolean`, `Character`], `Integers are whole numbers.`],
    [`Data types`, `Which data type stores only True or False?`, `Boolean`, [`Integer`, `String`, `Real`], `A character stores a single symbol.`],

    [`Programming concepts`, `Which programming construct is iteration?`, `A WHILE loop`, [`An IF statement`, `A variable declaration`, `A subroutine call`], `Iteration means repetition.`],
    [`Programming concepts`, `What is selection?`, `Choosing which code to run based on a condition (IF)`, [`Repeating code`, `Running code in order`, `Storing data`], `Sequence is running instructions in order.`],

    [`Arithmetic and relational operators`, `What is 17 MOD 5?`, `2`, [`3`, `3.4`, `12`], `MOD gives the remainder.`],
    [`Arithmetic and relational operators`, `What is 17 DIV 5?`, `3`, [`2`, `3.4`, `12`], `DIV gives the whole number part of a division.`],
    [`Arithmetic and relational operators`, `What does the operator != mean?`, `Not equal to`, [`Equal to`, `Greater than`, `Assign to`], `= assigns a value. == compares two values.`],

    [`Boolean operators`, `When is A AND B true?`, `When both A and B are true`, [`When either is true`, `When both are false`, `When A is false`], `OR is true when at least one is true.`],
    [`Boolean operators`, `What is the result of NOT True?`, `False`, [`True`, `Null`, `0 and 1`], `NOT reverses a Boolean value.`],

    [`Data structures`, `What is an array?`, `A fixed-size collection of items of the same data type`, [`A single variable`, `A type of loop`, `A collection of different data types with named fields`], `A record stores fields of different types.`],
    [`Data structures`, `In most programming languages, the first index of an array is...`, `0`, [`1`, `-1`, `10`], `Check the convention for your language or exam pseudo-code.`],

    [`Input/output and file handling`, `What should you do after reading from or writing to a file?`, `Close it`, [`Delete it`, `Rename it`, `Leave it open`], `Closing frees resources and saves the data.`],
    [`Input/output and file handling`, `Which file mode adds new data to the end of a file without erasing it?`, `Append`, [`Write`, `Read`, `Delete`], `Write mode overwrites existing content.`],

    [`String handling`, `What is string concatenation?`, `Joining two or more strings together`, [`Splitting a string in two`, `Converting a string to a number`, `Finding the length of a string`], `"Hello" + " World" gives "Hello World".`],
    [`String handling`, `What does LEN("computer") return?`, `8`, [`7`, `9`, `1`], `LEN counts the characters.`],

    [`Random number generation`, `Why might a program use random numbers?`, `To simulate things like dice rolls or shuffling cards`, [`To speed up the CPU`, `To compress files`, `To encrypt data only`], `Random numbers are often generated within a given range.`],

    [`Subroutines (procedures and functions)`, `What is the difference between a function and a procedure?`, `A function returns a value`, [`A procedure returns a value`, `A function cannot take parameters`, `There is no difference`], `Both are subroutines.`],
    [`Subroutines (procedures and functions)`, `Why are subroutines used?`, `To reuse code and make programs easier to read and test`, [`To make programs run slower`, `To store more data`, `To avoid using variables`], `They support structured programming.`],

    [`Structured programming and passing data`, `A local variable is...`, `Only accessible within the subroutine where it is declared`, [`Accessible everywhere in the program`, `Stored on the hard drive`, `A constant`], `A global variable can be used anywhere.`],
    [`Structured programming and passing data`, `A parameter is...`, `A value passed into a subroutine`, [`A value returned from a program`, `A type of loop`, `A syntax error`], `Parameters let subroutines work with different data.`],

    [`Robust and secure programming`, `What is data validation?`, `Checking that input is reasonable and sensible before it is used`, [`Checking the data is true`, `Encrypting the data`, `Deleting invalid programs`], `Validation cannot check that the data is actually correct.`],
    [`Robust and secure programming`, `What is authentication?`, `Confirming that a user is who they claim to be`, [`Encrypting data`, `Checking data types`, `Compressing data`], `An example is a username and password.`],
    [`Robust and secure programming`, `Why is input sanitisation used?`, `To remove or neutralise harmful characters in user input`, [`To make input shorter`, `To convert input to binary`, `To speed up the program`], `It helps to prevent attacks such as SQL injection.`],

    [`Classification of programming languages`, `Machine code is...`, `A low-level language of binary instructions the CPU executes directly`, [`A high-level language`, `A language for web design`, `A type of pseudo-code`], `Assembly language is also low-level.`],
    [`Classification of programming languages`, `What does a compiler do?`, `Translates the whole program into machine code before it runs`, [`Translates and runs one line at a time`, `Converts assembly to English`, `Removes bugs automatically`], `An interpreter runs one line at a time.`],
    [`Classification of programming languages`, `What does an interpreter do?`, `Translates and executes a program one line at a time`, [`Translates the whole program at once`, `Only checks the spelling`, `Converts files to binary`], `It stops at the first error.`],

    // ---------- 3.3 Fundamentals of data representation ----------
    [`Number bases`, `What is the binary number 1010 in decimal?`, `10`, [`8`, `12`, `1010`], `8 + 2 = 10.`],
    [`Number bases`, `Why is hexadecimal used by programmers?`, `It is a more compact and easier-to-read way of writing binary`, [`Computers use hexadecimal internally`, `It is faster to process`, `It uses fewer digits than decimal`], `One hex digit represents 4 bits.`],
    [`Number bases`, `What is hexadecimal F in decimal?`, `15`, [`16`, `14`, `10`], `A=10 up to F=15.`],

    [`Converting between bases`, `What is decimal 45 in 8-bit binary?`, `00101101`, [`00110101`, `00101011`, `00111001`], `32 + 8 + 4 + 1 = 45.`],
    [`Converting between bases`, `What is binary 11111111 in hexadecimal?`, `FF`, [`EE`, `F0`, `1F`], `1111 is F, and there are two groups of four bits.`],

    [`Units of information`, `How many bits are in a byte?`, `8`, [`4`, `16`, `1000`], `A nibble is 4 bits.`],
    [`Units of information`, `How many bytes are in a kilobyte in the AQA specification?`, `1000`, [`100`, `10 000`, `8`], `Megabyte = 1000 kilobytes.`],

    [`Binary arithmetic and shifts`, `What is 0101 + 0011 in binary?`, `1000`, [`0110`, `0111`, `1010`], `5 + 3 = 8.`],
    [`Binary arithmetic and shifts`, `What does a left binary shift by 1 do to a number?`, `Multiplies it by 2`, [`Divides it by 2`, `Adds 1`, `Doubles the number of bits`], `A right shift divides by 2.`],
    [`Binary arithmetic and shifts`, `When does overflow occur?`, `When a result is too large for the available bits`, [`When a number is negative`, `When a file is too big`, `When a program crashes`], `The extra bit is lost.`],

    [`Character encoding`, `Why was Unicode developed?`, `To represent characters from many more languages and symbols than ASCII`, [`To use fewer bits`, `To encrypt text`, `To speed up printing`], `ASCII only covers 128 or 256 characters.`],
    [`Character encoding`, `What is a character set?`, `A defined list of characters a computer can recognise, each with a binary code`, [`A group of fonts`, `A type of keyboard`, `A list of passwords`], `ASCII and Unicode are examples.`],

    [`Representing images`, `What is a pixel?`, `The smallest element of a digital image`, [`A type of file`, `A unit of screen size`, `A colour code`], `Images are made up of a grid of pixels.`],
    [`Representing images`, `What is colour depth?`, `The number of bits used to represent the colour of each pixel`, [`The number of pixels in an image`, `The brightness of the screen`, `The size of the file in bytes`], `More bits give more possible colours.`],
    [`Representing images`, `If you increase the resolution of an image, the file size...`, `Increases`, [`Decreases`, `Stays the same`, `Halves`], `There are more pixels to store.`],

    [`Representing sound`, `What is sample rate?`, `The number of samples taken per second`, [`The volume of the sound`, `The length of the recording`, `The number of speakers`], `It is measured in hertz.`],
    [`Representing sound`, `Increasing the sample rate will...`, `Improve the quality and increase the file size`, [`Reduce the quality`, `Reduce the file size`, `Have no effect`], `Bit depth also affects the quality and file size.`],

    [`Data compression`, `What is lossless compression?`, `Compression where no data is lost, so the original can be restored exactly`, [`Compression that permanently removes some data`, `Compression only for images`, `Compression that encrypts data`], `Lossy compression removes some data permanently.`],
    [`Data compression`, `Run length encoding (RLE) stores data as...`, `A value and a count of how many times it repeats`, [`A list of unique values`, `A binary tree`, `A checksum`], `It works best on data with lots of repeats.`],

    // ---------- 3.4 Computer systems ----------
    [`Hardware and software`, `Which of these is software?`, `An operating system`, [`A hard drive`, `A keyboard`, `A motherboard`], `Hardware is the physical components.`],
    [`Hardware and software`, `What is hardware?`, `The physical components of a computer system`, [`The programs on a computer`, `The instructions to the CPU`, `The data stored in memory`], `Software is the programs.`],

    [`Boolean logic`, `What is the output of a NOT gate when the input is 1?`, `0`, [`1`, `Both`, `No output`], `NOT inverts the input.`],
    [`Boolean logic`, `An AND gate outputs 1 only when...`, `Both inputs are 1`, [`Either input is 1`, `Both inputs are 0`, `The first input is 1`], `An OR gate outputs 1 when at least one input is 1.`],
    [`Boolean logic`, `What is the output of an OR gate when the inputs are 0 and 1?`, `1`, [`0`, `01`, `Undefined`], `OR outputs 1 if at least one input is 1.`],

    [`Systems software`, `What does an operating system do?`, `Manages the hardware, memory, files and applications`, [`Only edits documents`, `Only browses the internet`, `Only connects to networks`], `It also provides the user interface.`],
    [`Systems software`, `Which of these is a utility program?`, `Anti-virus software`, [`A word processor`, `A web browser`, `A spreadsheet`], `Utility programs help maintain and protect the computer.`],

    // ---------- 3.5 Systems architecture ----------
    [`Von Neumann architecture`, `What is the stored program concept?`, `Instructions and data are stored together in main memory`, [`Programs are stored only on the hard drive`, `Instructions are stored in the CPU only`, `Data is stored separately from instructions`], `The CPU fetches instructions from memory.`],
    [`Von Neumann architecture`, `Which register holds the address of the next instruction to be fetched?`, `Program counter (PC)`, [`Memory data register (MDR)`, `Accumulator (ACC)`, `Current instruction register (CIR)`], `The MAR holds the address currently being accessed.`],
    [`Von Neumann architecture`, `What does the Memory Address Register (MAR) hold?`, `The address of the memory location being read or written`, [`The data being transferred`, `The result of a calculation`, `The next instruction`], `The MDR holds the data.`],

    [`The fetch-decode-execute cycle`, `What is the correct order of the CPU cycle?`, `Fetch, decode, execute`, [`Decode, fetch, execute`, `Execute, fetch, decode`, `Fetch, execute, decode`], `It repeats for every instruction.`],
    [`The fetch-decode-execute cycle`, `In the fetch stage, an instruction is copied from...`, `Main memory to the CPU`, [`The CPU to main memory`, `The hard drive to the monitor`, `The ALU to the registers`], `The instruction is then decoded by the control unit.`],

    [`CPU performance`, `Which of these would improve CPU performance?`, `Having more cores`, [`Smaller cache`, `Lower clock speed`, `Less RAM`], `A higher clock speed and larger cache also help.`],
    [`CPU performance`, `What is clock speed measured in?`, `Hertz (GHz)`, [`Bytes`, `Watts`, `Pixels`], `It is the number of cycles per second.`],

    [`Memory and storage`, `RAM is...`, `Volatile: it loses its contents when the power is off`, [`Non-volatile`, `Read-only`, `Slower than a hard drive`], `ROM holds boot instructions and is non-volatile.`],
    [`Memory and storage`, `What is the purpose of cache memory?`, `To store frequently used data close to the CPU for fast access`, [`To permanently store files`, `To replace RAM`, `To power the CPU`], `It is faster than RAM.`],
    [`Memory and storage`, `What is virtual memory?`, `Part of secondary storage used as RAM when RAM is full`, [`Extra cache inside the CPU`, `Memory that is not real`, `A type of ROM`], `It is much slower than RAM.`],
    [`Memory and storage`, `Which type of storage has no moving parts?`, `Solid state drive`, [`Hard disk drive`, `Optical disc`, `Floppy disk`], `SSDs use flash memory.`],

    [`Embedded systems`, `What is an embedded system?`, `A computer built into a larger device to do a specific job`, [`A general-purpose computer`, `A server`, `A large network`], `Examples are washing machines and car engine controllers.`],
    [`Embedded systems`, `Which of these is an example of an embedded system?`, `The controller in a washing machine`, [`A desktop PC`, `A laptop`, `A web server`], `Embedded systems are usually dedicated to one task.`],

    // ---------- 3.9 Ethical, legal and environmental impacts ----------
    [`Ethical and cultural issues`, `What is the digital divide?`, `The gap between those who have access to technology and those who do not`, [`The gap between two computers`, `A break in an internet connection`, `The difference between hardware and software`], `It can be caused by cost, location or age.`],
    [`Ethical and cultural issues`, `Which of these is an ethical concern about digital technology?`, `Privacy of personal data`, [`Faster processors`, `Larger screens`, `Cheaper storage`], `Other concerns include surveillance and bias in algorithms.`],

    [`Legislation`, `Which Act makes hacking illegal in the UK?`, `Computer Misuse Act 1990`, [`Data Protection Act 2018`, `Copyright, Designs and Patents Act 1988`, `Freedom of Information Act`], `It covers unauthorised access and modification of computer material.`],
    [`Legislation`, `What does the Data Protection Act 2018 cover?`, `How personal data is collected, stored and used`, [`Illegal copying of software`, `Hacking into computers`, `Use of open-source software`], `It protects individuals' rights over their data.`],
    [`Legislation`, `Which Act covers illegal copying of software and media?`, `Copyright, Designs and Patents Act 1988`, [`Computer Misuse Act 1990`, `Data Protection Act 2018`, `Health and Safety Act`], `Software licences set out how software may be used.`],

    [`Environmental issues`, `Which is an environmental problem caused by digital technology?`, `Electronic waste containing toxic materials`, [`Faster internet speeds`, `More storage space`, `Better screens`], `Devices should be recycled properly.`],
    [`Environmental issues`, `Why do data centres have a large environmental impact?`, `They use large amounts of energy for power and cooling`, [`They use no electricity`, `They are very small`, `They produce no heat`], `Many are now powered by renewable energy.`],
  ],
};

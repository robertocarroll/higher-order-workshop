# Higher Order Function Exercises
Welcome to Ada workshop on higher order functions. It is designed to be forked by students, cloned to the desktop or to repl.it, and then reuploaded. If you can't figure something else, make sure to re**read** the comments and prompt, **search** any concepts you don't understand or any errors you are having, and **ask** instructors or other students.

[See instructions](##Process). This will be hard at first until it isn't. You should open the code on your machine (ideally using VS Code). If that doesn't work, you can use repl.it, though you will need to get VS Code working eventually.

## Instructions
### Exercise 00
Check the code [here](code/00.js).

There's a very basic function that returns simply the string "Hello world".
```
function exercise00() {
    return "Hello World!"
}
```
Check the tests [here](test/00.js).
Expect runs the function in brackets, and then compares it with the later statement. This is from an assertion framework called *Chai*, but don't worry about this too much for now.
```
expect(exercise00()).to.equal("Hello World!");
```
We are checking the function and comparing its output with the string at the end.

In your console type:
```
npm test 
```
You should see a passing test.
Normally you would then commit with
```
git add .
git commit -m "Completed exercise 0"
git push -u origin main
```
then move onto the next test! However you don't need to do it for this exercise, since we're just getting started and haven't made any changes!

## Process
### Clone
#### To Desktop:
Open a terminal using your terminal (Mac/Linux) or Git Bash (Windows). If you are using VS Code, this can be done using 
``` Ctrl-Shift-` ``` (win/linux) or ```Cmd-Shift-` ``` (mac). Navigate to the correct directory and type 
```
git clone https://github.com/<your handle>/workshop_01_exampleTemplate 
```
replacing ``<your handle>`` with your github handle.

#### In repl . it
Go to repl.it, click the blue button at the the top, choose 'Import from Repl' and paste in the following link : ```github.com/<your handle>/workshop_01_exampleTemplate```
replacing ``<your handle>`` with your github handle.


### Accessing the code
#### Desktop
Navigate to the folder using 
```
cd workshop_01_exampleTemplate
```
You can also use ``` cd w``` and press tab
once you are in this folder, though you might have to specify a number and hit tab again (it only autocompletes what it can be sure of).
Then type ```code .``` to open your VS Code editor.

The code will be under the 'code folder' visible to the left - exercises are numbered.

#### Replit
The code will be under the **code** folder visible to the left - exercises are numbered.

### Running the tests
In order to setup the tests you will need to type :
```
npm install
```
you can then type 
```
npm test
```
to run the tests.

### Unskipping further tests
Tests are in the **test** folder. Some tests may be skipped:
```
describe.skip('Exercise 0',()=>{
    // skipped test would be here
});
```
removing the `.skip` will cause the test to run.

```
describe('Exercise 0',()=>{
    // test would now work
});
```

You should never change the tests other than removing the `.skip` for now!

### Saving
Either in the Repl.it terminal, the vs code terminal or the terminal on your computer:
``` 
git add . 
git commit -m "<commit message here>"
git push -u origin main
```
Replace ```<commit message here>``` with a meaningful message suggesting which you have solved.
Try to get into the habit of committing and pushing after every change.
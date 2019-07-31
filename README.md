# sharp-crash-problem
This docker image is designed to reproduce a crash I experienced. Just run `docker-compose up --build` to see it.

It's a funny bug because removing ANY of these files from processing will eliminate the issue.

The real problem is that it kills the process instead of throwing an error.

## Expected output
```
sharp-crash-problem_1  |
sharp-crash-problem_1  | > sharp-gif-problem@1.0.0 start /usr/src/app
sharp-crash-problem_1  | > node index.js
sharp-crash-problem_1  |
sharp-crash-problem_1  | success!
```
OR
```
sharp-crash-problem_1  |
sharp-crash-problem_1  | > sharp-gif-problem@1.0.0 start /usr/src/app
sharp-crash-problem_1  | > node index.js
sharp-crash-problem_1  |
sharp-crash-problem_1  | fail!
```

## Actual output
```
sharp-crash-problem_1  |
sharp-crash-problem_1  | > sharp-gif-problem@1.0.0 start /usr/src/app
sharp-crash-problem_1  | > node index.js
sharp-crash-problem_1  |
sharpgifproblem_sharp-crash-problem_1 exited with code 0
```

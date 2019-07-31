# sharp-crash-problem
This docker image is designed to reproduce a crash I experienced. Just run `docker-compose up --build` to see it.

It's a funny bug because removing ANY of these files from processing will eliminate the issue.

The real problem is that it kills the process instead of throwing an error.

## Expected output
```
sharp-crash-problem    |
sharp-crash-problem    | > sharp-gif-problem@1.0.0 start /usr/src/app
sharp-crash-problem    | > node index.js
sharp-crash-problem    |
sharp-crash-problem    | success!
sharp-crash-problem exited with code 0
```
OR
```
sharp-crash-problem    |
sharp-crash-problem    | > sharp-gif-problem@1.0.0 start /usr/src/app
sharp-crash-problem    | > node index.js
sharp-crash-problem    |
sharp-crash-problem    | fail!
sharp-crash-problem exited with code 0
```

## Actual output
```
sharp-crash-problem    |
sharp-crash-problem    | > sharp-gif-problem@1.0.0 start /usr/src/app
sharp-crash-problem    | > node index.js
sharp-crash-problem    |
sharp-crash-problem exited with code 0
```
(no "success!" or "fail!", just process crash)

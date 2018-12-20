#

int returnA() {
	returnB();
	return 'A';
}


int returnB() {
	for(;;);
	return 'B';
}

/*

404:	JSR R5,352
410:	JSR PC,424
414:	MOV #101,R0
420:	JMP 366
424:	JSR R5,352
430:	MOV #102,R0
434:	JMP 366

vs

404:	JSR R5,352
410:	JSR PC,426
414:	MOV #101,R0
420:	BR 422
422:	JMP 366
426:	JSR R5,352
432:	BR 432
434:	MOV #102,R0
440:	BR 442
442:	JMP 366
*/
. = 0^.
    br  1f
    4          / iot

. = 40^.
1:
    jmp start

. = 300^.
.globl _etext, _edata, _end, _returnA
start:
    mov     $1000, sp

/ clear stack
    mov     $_etext,r0
1:
    clr     (r0)+
    cmp     r0,$1000
    blo     1b

    mov     $1, r1
    mov     $2, r2
    mov     $3, r3
    mov     $4, r4
    mov     $5, r5

    jsr     pc,_returnA
    br      .

.globl  csv
csv:
        mov     r5,r0
        mov     sp,r5
        mov     r4,-(sp)
        mov     r3,-(sp)
        mov     r2,-(sp)
        jsr     pc,(r0)

.globl cret
cret:
        mov     r5,r1
        mov     -(r1),r4
        mov     -(r1),r3
        mov     -(r1),r2
        mov     r5,sp
        mov     (sp)+,r5
        rts     pc



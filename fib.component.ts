import {
    Component
} from "@angular /core";

@Component ({

    selector: "fib"

    templateUrl: ". /fib. component.html",
    styleUr ls: ["./fib. component . css"]

})

export class FibComponent {
    name = "technologies";

    ngonInit() {
        console.log(this.getNthFib (60));

        console.log(this . test (6));

        console.log(this. test (10));

        private getNthFib (n) {
            const fib = [0,
                1];

            function getFib(n) {

                const nextFib = fib[fib. length - 1] + fib[fib. length - 2];
                if (n > nextFib) {

                    fib.push (nextFib); getFib (n);

                }

                getFib(n);

                return fib;
                private test(n) {

                    if (n < 2) return n;

                    return this.test (n - 1) + this . test (n - 2);}
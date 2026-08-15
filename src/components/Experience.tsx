import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="w-full py-20 lg:py-32">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-8 flex items-center gap-4">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-primary/70">
              Experience
            </span>
            <div className="h-px flex-1 bg-border/80" />
          </div>

          <motion.article
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overflow-hidden rounded-3xl border border-border/70 bg-card/90 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm"
          >
            <div className="h-1 w-full bg-gradient-to-r from-primary/70 via-primary/25 to-transparent" />
            <div className="p-6 md:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                      Software Engineering Intern, EVArc
                    </h3>
                    <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
                      Part time, off-site internship
                    </p>
                  </div>
                  <div className="inline-flex items-center rounded-full border border-border/70 bg-secondary/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Internship
                  </div>
                </div>

                <div className="rounded-2xl border border-border/70 bg-background/60 px-4 py-3 text-sm shadow-sm lg:text-right">
                  <p className="font-semibold text-foreground">Sangli, India</p>
                  <p className="text-muted-foreground">July 2025 - September 2025</p>
                </div>
              </div>

              <div className="mt-7 border-t border-border/70 pt-6">
                <ul className="space-y-5">
                  <li className="flex gap-3 text-base leading-7 text-muted-foreground">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <p>
                      <span className="font-semibold text-foreground">
                        Engineered 10+ REST APIs
                      </span>{" "}
                      using Java, Spring Boot, and MongoDB to manage the complete wallet
                      lifecycle, including wallet creation, balance inquiry, fund hold,
                      debit, release, and transaction history for real-time EV charging
                      payments.
                    </p>
                  </li>
                  <li className="flex gap-3 text-base leading-7 text-muted-foreground">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <p>
                      <span className="font-semibold text-foreground">
                        Architected 4+ multi-tenant MongoDB collections with 10+ indexes
                      </span>{" "}
                      to optimize wallet, payment, and hold operations for scalable and
                      efficient data access.
                    </p>
                  </li>
                  <li className="flex gap-3 text-base leading-7 text-muted-foreground">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <p>
                      <span className="font-semibold text-foreground">
                        Implemented 5+ secure wallet workflows
                      </span>{" "}
                      with request validation, balance verification, fund pre-authorization,
                      exception handling, and concurrent transaction processing following
                      RESTful and layered architecture principles.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

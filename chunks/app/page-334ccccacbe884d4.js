(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974], {
        285: (e, a, t) => {
            "use strict";
            t.d(a, {
                $: () => o
            });
            var s = t(5155);
            t(2115);
            var n = t(9708),
                l = t(2085),
                i = t(9434);
            let r = (0, l.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
                variants: {
                    variant: {
                        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
                        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
                        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                        link: "text-primary underline-offset-4 hover:underline"
                    },
                    size: {
                        default: "h-9 px-4 py-2 has-[>svg]:px-3",
                        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                        icon: "size-9"
                    }
                },
                defaultVariants: {
                    variant: "default",
                    size: "default"
                }
            });

            function o(e) {
                let {
                    className: a,
                    variant: t,
                    size: l,
                    asChild: o = !1,
                    ...c
                } = e, d = o ? n.DX : "button";
                return (0, s.jsx)(d, {
                    "data-slot": "button",
                    className: (0, i.cn)(r({
                        variant: t,
                        size: l,
                        className: a
                    })),
                    ...c
                })
            }
        },
        1034: (e, a, t) => {
            Promise.resolve().then(t.bind(t, 2071)), Promise.resolve().then(t.bind(t, 1911)), Promise.resolve().then(t.bind(t, 6030)), Promise.resolve().then(t.bind(t, 4776)), Promise.resolve().then(t.bind(t, 4827)), Promise.resolve().then(t.bind(t, 5906))
        },
        1366: (e, a, t) => {
            "use strict";
            t.d(a, {
                A: () => s
            });
            let s = (0, t(9946).A)("message-circle", [
                ["path", {
                    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
                    key: "vv11sd"
                }]
            ])
        },
        1911: (e, a, t) => {
            "use strict";
            t.d(a, {
                default: () => x
            });
            var s = t(5155),
                n = t(2115),
                l = t(285),
                i = t(6695),
                r = t(5125),
                o = t(9037),
                c = t(7580),
                d = t(4186),
                m = t(4516);

            function x() {
                let [e, a] = (0, n.useState)(!1), [t, x] = (0, n.useState)(0), h = (0, n.useRef)(null);
                (0, n.useEffect)(() => {
                    let e = new IntersectionObserver(e => {
                        let [t] = e;
                        t.isIntersecting && a(!0)
                    }, {
                        threshold: .1
                    });
                    return h.current && e.observe(h.current), () => {
                        h.current && e.unobserve(h.current)
                    }
                }, []), (0, n.useEffect)(() => {
                    let e = setInterval(() => {
                        x(e => (e + 1) % r.nV.length)
                    }, 4e3);
                    return () => clearInterval(e)
                }, []);
                let u = [{
                    icon: (0, s.jsx)(o.A, {
                        className: "w-6 h-6 text-blue-600"
                    }),
                    title: "Berkualitas",
                    description: "Layanan dengan standar tertinggi dan garansi kepuasan"
                }, {
                    icon: (0, s.jsx)(c.A, {
                        className: "w-6 h-6 text-blue-600"
                    }),
                    title: "Profesional",
                    description: "Tim teknisi berpengalaman dan tersertifikasi"
                }, {
                    icon: (0, s.jsx)(d.A, {
                        className: "w-6 h-6 text-blue-600"
                    }),
                    title: "Tepat Waktu",
                    description: "Pelayanan cepat tanpa mengurangi kualitas"
                }, {
                    icon: (0, s.jsx)(m.A, {
                        className: "w-6 h-6 text-blue-600"
                    }),
                    title: "Strategis",
                    description: "Lokasi mudah dijangkau di pusat kota"
                }];
                return (0, s.jsx)("section", {
                    id: "about",
                    ref: h,
                    className: "py-20 bg-white",
                    children: (0, s.jsxs)("div", {
                        className: "container mx-auto px-4",
                        children: [(0, s.jsxs)("div", {
                            className: "text-center mb-16",
                            children: [(0, s.jsxs)("h2", {
                                className: "text-4xl md:text-5xl font-bold text-slate-900 mb-4 transition-all duration-1000 transform ".concat(e ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"),
                                children: ["Tentang ", (0, s.jsx)("span", {
                                    className: "text-blue-600",
                                    children: "Ajijaya Automobile"
                                })]
                            }), (0, s.jsx)("p", {
                                className: "text-xl text-slate-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 transform ".concat(e ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"),
                                children: "Kami adalah bengkel mobil terpercaya yang telah berpengalaman lebih dari 10 tahun dalam memberikan layanan service dan sparepart berkualitas untuk semua jenis mobil."
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "grid lg:grid-cols-2 gap-12 items-center mb-16",
                            children: [(0, s.jsx)("div", {
                                className: "relative transition-all duration-1000 delay-300 transform ".concat(e ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"),
                                children: (0, s.jsxs)("div", {
                                    className: "relative h-96 rounded-2xl overflow-hidden shadow-2xl",
                                    children: [(0, s.jsx)("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-blue-600/20 to-orange-600/20 z-10"
                                    }), (0, s.jsx)("img", {
                                        src: r.nV[t],
                                        alt: "Gallery",
                                        className: "w-full h-full object-cover"
                                    }), (0, s.jsx)("div", {
                                        className: "absolute bottom-4 left-4 right-4 z-20",
                                        children: (0, s.jsxs)("div", {
                                            className: "bg-white/95 backdrop-blur-sm rounded-lg p-4",
                                            children: [(0, s.jsx)("h3", {
                                                className: "font-semibold text-slate-900 mb-2",
                                                children: "Galeri Layanan Kami"
                                            }), (0, s.jsx)("div", {
                                                className: "flex space-x-2",
                                                children: r.nV.map((e, a) => (0, s.jsx)("button", {
                                                    onClick: () => x(a),
                                                    className: "w-2 h-2 rounded-full transition-all duration-200 ".concat(a === t ? "bg-blue-600 w-8" : "bg-slate-300")
                                                }, a))
                                            })]
                                        })
                                    })]
                                })
                            }), (0, s.jsxs)("div", {
                                className: "space-y-6 transition-all duration-1000 delay-500 transform ".concat(e ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"),
                                children: [(0, s.jsxs)("div", {
                                    children: [(0, s.jsx)("h3", {
                                        className: "text-2xl font-bold text-slate-900 mb-4",
                                        children: "Mengapa Memilih Kami?"
                                    }), (0, s.jsx)("p", {
                                        className: "text-slate-600 leading-relaxed mb-6",
                                        children: "Ajijaya Automobile hadir sebagai solusi lengkap untuk kebutuhan perawatan mobil Anda. Dengan dukungan teknisi profesional dan peralatan modern, kami memastikan setiap layanan memberikan hasil terbaik untuk kendaraan kesayangan Anda."
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: u.map((e, a) => (0, s.jsx)(i.Zp, {
                                        className: "border-slate-200 hover:shadow-lg transition-shadow duration-300",
                                        children: (0, s.jsx)(i.Wu, {
                                            className: "p-4",
                                            children: (0, s.jsxs)("div", {
                                                className: "flex items-start space-x-3",
                                                children: [(0, s.jsx)("div", {
                                                    className: "p-2 bg-blue-50 rounded-lg",
                                                    children: e.icon
                                                }), (0, s.jsxs)("div", {
                                                    children: [(0, s.jsx)("h4", {
                                                        className: "font-semibold text-slate-900 mb-1",
                                                        children: e.title
                                                    }), (0, s.jsx)("p", {
                                                        className: "text-sm text-slate-600",
                                                        children: e.description
                                                    })]
                                                })]
                                            })
                                        })
                                    }, a))
                                }), (0, s.jsx)("div", {
                                    className: "pt-4",
                                    children: (0, s.jsx)(l.$, {
                                        onClick: () => window.open(r.CQ.links.whatsapp, "_blank"),
                                        className: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3",
                                        children: "Konsultasi dengan Ahli"
                                    })
                                })]
                            })]
                        }), (0, s.jsx)("div", {
                            className: "bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl p-8 text-white transition-all duration-1000 delay-700 transform ".concat(e ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"),
                            children: (0, s.jsx)("div", {
                                className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center",
                                children: [{
                                    number: "10+",
                                    label: "Tahun Berpengalaman"
                                }, {
                                    number: "1000+",
                                    label: "Pelanggan Puas"
                                }, {
                                    number: "15+",
                                    label: "Teknisi Profesional"
                                }, {
                                    number: "99%",
                                    label: "Tingkat Kepuasan"
                                }].map((e, a) => (0, s.jsxs)("div", {
                                    children: [(0, s.jsx)("div", {
                                        className: "text-3xl md:text-4xl font-bold mb-2",
                                        children: e.number
                                    }), (0, s.jsx)("div", {
                                        className: "text-white/90",
                                        children: e.label
                                    })]
                                }, a))
                            })
                        })]
                    })
                })
            }
        },
        2071: (e, a, t) => {
            "use strict";
            t.d(a, {
                default: () => b
            });
            var s = t(5155),
                n = t(2115),
                l = t(285),
                i = t(5125),
                r = t(9946);
            let o = (0, r.A)("facebook", [
                    ["path", {
                        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
                        key: "1jg4f8"
                    }]
                ]),
                c = (0, r.A)("instagram", [
                    ["rect", {
                        width: "20",
                        height: "20",
                        x: "2",
                        y: "2",
                        rx: "5",
                        ry: "5",
                        key: "2e1cvw"
                    }],
                    ["path", {
                        d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
                        key: "9exkf1"
                    }],
                    ["line", {
                        x1: "17.5",
                        x2: "17.51",
                        y1: "6.5",
                        y2: "6.5",
                        key: "r4j83e"
                    }]
                ]),
                d = (0, r.A)("twitter", [
                    ["path", {
                        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
                        key: "pff0z6"
                    }]
                ]);
            var m = t(1366),
                x = t(9420),
                h = t(8883),
                u = t(4516);
            let p = (0, r.A)("chevron-up", [
                ["path", {
                    d: "m18 15-6-6-6 6",
                    key: "153udz"
                }]
            ]);

            function b() {
                let [e, a] = (0, n.useState)(!1), [t, r] = (0, n.useState)(!1);
                (0, n.useEffect)(() => {
                    a(!0);
                    let e = () => {
                        r(window.scrollY > 500)
                    };
                    return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
                }, []);
                let b = e => {
                        let a = document.getElementById(e);
                        a && a.scrollIntoView({
                            behavior: "smooth"
                        })
                    },
                    g = [{
                        icon: (0, s.jsx)(o, {
                            className: "w-5 h-5"
                        }),
                        href: "#",
                        label: "Facebook"
                    }, {
                        icon: (0, s.jsx)(c, {
                            className: "w-5 h-5"
                        }),
                        href: "#",
                        label: "Instagram"
                    }, {
                        icon: (0, s.jsx)(d, {
                            className: "w-5 h-5"
                        }),
                        href: "#",
                        label: "Twitter"
                    }];
                return (0, s.jsxs)("footer", {
                    className: "bg-slate-900 text-white",
                    children: [(0, s.jsx)("div", {
                        className: "container mx-auto px-4 py-12",
                        children: (0, s.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                            children: [(0, s.jsxs)("div", {
                                className: "space-y-4 transition-all duration-1000 ".concat(e ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"),
                                children: [(0, s.jsxs)("div", {
                                    className: "flex items-center space-x-3",
                                    children: [(0, s.jsx)("img", {
                                        src: "/logo-ajijaya.png",
                                        alt: "Ajijaya Automobile",
                                        className: "w-10 h-10 rounded-lg object-cover"
                                    }), (0, s.jsx)("span", {
                                        className: "text-xl font-bold",
                                        children: "Ajijaya Automobile"
                                    })]
                                }), (0, s.jsx)("p", {
                                    className: "text-slate-400 leading-relaxed",
                                    children: "Bengkel mobil terpercaya dengan layanan service dan sparepart berkualitas. Teknisi profesional dengan garansi kepuasan pelanggan."
                                }), (0, s.jsx)("div", {
                                    className: "flex space-x-3",
                                    children: g.map((e, a) => (0, s.jsx)("button", {
                                        className: "w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200",
                                        "aria-label": e.label,
                                        children: e.icon
                                    }, a))
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "space-y-4 transition-all duration-1000 delay-200 ".concat(e ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"),
                                children: [(0, s.jsx)("h3", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Menu Cepat"
                                }), (0, s.jsx)("ul", {
                                    className: "space-y-2",
                                    children: i.Lg.map((e, a) => (0, s.jsx)("li", {
                                        children: (0, s.jsx)("button", {
                                            onClick: () => b(e.href.replace("#", "")),
                                            className: "text-slate-400 hover:text-white transition-colors duration-200 text-sm",
                                            children: e.name
                                        })
                                    }, a))
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "space-y-4 transition-all duration-1000 delay-400 ".concat(e ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"),
                                children: [(0, s.jsx)("h3", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Layanan"
                                }), (0, s.jsxs)("ul", {
                                    className: "space-y-2 text-sm",
                                    children: [(0, s.jsx)("li", {
                                        children: (0, s.jsx)("span", {
                                            className: "text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer",
                                            children: "Service Berkala"
                                        })
                                    }), (0, s.jsx)("li", {
                                        children: (0, s.jsx)("span", {
                                            className: "text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer",
                                            children: "Service AC Mobil"
                                        })
                                    }), (0, s.jsx)("li", {
                                        children: (0, s.jsx)("span", {
                                            className: "text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer",
                                            children: "Ganti Oli & Filter"
                                        })
                                    }), (0, s.jsx)("li", {
                                        children: (0, s.jsx)("span", {
                                            className: "text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer",
                                            children: "Sparepart Mobil"
                                        })
                                    }), (0, s.jsx)("li", {
                                        children: (0, s.jsx)("span", {
                                            className: "text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer",
                                            children: "Engine Diagnostics"
                                        })
                                    }), (0, s.jsx)("li", {
                                        children: (0, s.jsx)("span", {
                                            className: "text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer",
                                            children: "Body Repair & Painting"
                                        })
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "space-y-4 transition-all duration-1000 delay-600 ".concat(e ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"),
                                children: [(0, s.jsx)("h3", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Hubungi Kami"
                                }), (0, s.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex items-center space-x-3",
                                        children: [(0, s.jsx)(m.A, {
                                            className: "w-5 h-5 text-green-600"
                                        }), (0, s.jsx)("span", {
                                            className: "text-slate-400 text-sm",
                                            children: "+62 838-1256-0767"
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "flex items-center space-x-3",
                                        children: [(0, s.jsx)(x.A, {
                                            className: "w-5 h-5 text-blue-600"
                                        }), (0, s.jsx)("span", {
                                            className: "text-slate-400 text-sm",
                                            children: "+62 838-1256-0767"
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "flex items-center space-x-3",
                                        children: [(0, s.jsx)(h.A, {
                                            className: "w-5 h-5 text-orange-600"
                                        }), (0, s.jsx)("span", {
                                            className: "text-slate-400 text-sm",
                                            children: "info@ajijaya-automobile.com"
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "flex items-center space-x-3",
                                        children: [(0, s.jsx)(u.A, {
                                            className: "w-5 h-5 text-purple-600"
                                        }), (0, s.jsx)("span", {
                                            className: "text-slate-400 text-sm",
                                            children: "Gelam Jaya, Kec. Ps. Kemis, Kabupaten Tangerang, Banten 15560"
                                        })]
                                    })]
                                })]
                            })]
                        })
                    }), (0, s.jsx)("div", {
                        className: "border-t border-slate-800",
                        children: (0, s.jsx)("div", {
                            className: "container mx-auto px-4 py-6",
                            children: (0, s.jsxs)("div", {
                                className: "flex flex-col md:flex-row items-center justify-between",
                                children: [(0, s.jsx)("div", {
                                    className: "text-slate-400 text-sm mb-4 md:mb-0",
                                    children: "\xa9 2024 Ajijaya Automobile. All rights reserved."
                                }), (0, s.jsxs)("div", {
                                    className: "flex items-center space-x-6",
                                    children: [(0, s.jsxs)(l.$, {
                                        onClick: () => window.open(i.CQ.links.whatsapp, "_blank"),
                                        size: "sm",
                                        className: "bg-green-600 hover:bg-green-700 text-white",
                                        children: [(0, s.jsx)(m.A, {
                                            className: "w-4 h-4 mr-2"
                                        }), "WhatsApp"]
                                    }), (0, s.jsxs)(l.$, {
                                        onClick: () => window.open("tel:".concat(i.CQ.links.phone), "_blank"),
                                        size: "sm",
                                        variant: "outline",
                                        className: "bg-white/10 border-white/20 text-white hover:bg-white/20",
                                        children: [(0, s.jsx)(x.A, {
                                            className: "w-4 h-4 mr-2"
                                        }), "Call"]
                                    })]
                                })]
                            })
                        })
                    }), t && (0, s.jsx)("button", {
                        onClick: () => {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        },
                        className: "fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 z-50",
                        "aria-label": "Scroll to top",
                        children: (0, s.jsx)(p, {
                            className: "w-6 h-6"
                        })
                    })]
                })
            }
        },
        4186: (e, a, t) => {
            "use strict";
            t.d(a, {
                A: () => s
            });
            let s = (0, t(9946).A)("clock", [
                ["path", {
                    d: "M12 6v6l4 2",
                    key: "mmk7yg"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }]
            ])
        },
        4516: (e, a, t) => {
            "use strict";
            t.d(a, {
                A: () => s
            });
            let s = (0, t(9946).A)("map-pin", [
                ["path", {
                    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
                    key: "1r0f0z"
                }],
                ["circle", {
                    cx: "12",
                    cy: "10",
                    r: "3",
                    key: "ilqhr7"
                }]
            ])
        },
        4776: (e, a, t) => {
            "use strict";
            t.d(a, {
                default: () => d
            });
            var s = t(5155),
                n = t(2115),
                l = t(285),
                i = t(5125),
                r = t(9420),
                o = t(1366);
            let c = (0, t(9946).A)("chevron-down", [
                ["path", {
                    d: "m6 9 6 6 6-6",
                    key: "qrunsl"
                }]
            ]);

            function d() {
                let [e, a] = (0, n.useState)(!1), [t, d] = (0, n.useState)(!1);
                (0, n.useEffect)(() => {
                    d(!0);
                    let e = () => {
                        a(window.scrollY > 50)
                    };
                    return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
                }, []);
                let m = e => {
                    let a = document.getElementById(e);
                    a && a.scrollIntoView({
                        behavior: "smooth"
                    })
                };
                return (0, s.jsxs)("section", {
                    id: "home",
                    className: "relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden",
                    children: [(0, s.jsxs)("div", {
                        className: "absolute inset-0",
                        children: [(0, s.jsx)("div", {
                            className: "absolute inset-0 bg-black/20"
                        }), (0, s.jsx)("div", {
                            className: "absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
                        }), (0, s.jsx)("div", {
                            className: "absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"
                        }), (0, s.jsx)("div", {
                            className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-500"
                        })]
                    }), (0, s.jsx)("nav", {
                        className: "fixed top-0 w-full z-50 transition-all duration-300 ".concat(e ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"),
                        children: (0, s.jsx)("div", {
                            className: "container mx-auto px-4 py-4",
                            children: (0, s.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex items-center space-x-3",
                                    children: [(0, s.jsx)("img", {
                                        src: "/logo-ajijaya.png",
                                        alt: "Ajijaya Automobile",
                                        className: "w-10 h-10 rounded-lg object-cover"
                                    }), (0, s.jsx)("span", {
                                        className: "text-white font-bold text-xl",
                                        children: "Ajijaya Automobile"
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "hidden md:flex items-center space-x-8",
                                    children: ["Beranda", "Tentang", "Layanan", "Mengapa Memilih Kami", "Kontak"].map((e, a) => (0, s.jsx)("button", {
                                        onClick: () => m("Beranda" === e ? "home" : "Tentang" === e ? "about" : "Layanan" === e ? "services" : "Mengapa Memilih Kami" === e ? "why-choose-us" : "contact"),
                                        className: "text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium",
                                        children: e
                                    }, a))
                                }), (0, s.jsxs)("div", {
                                    className: "flex items-center space-x-3",
                                    children: [(0, s.jsxs)(l.$, {
                                        onClick: () => window.open(i.CQ.links.phone, "_blank"),
                                        size: "sm",
                                        variant: "outline",
                                        className: "bg-white/10 border-white/20 text-white hover:bg-white/20",
                                        children: [(0, s.jsx)(r.A, {
                                            className: "w-4 h-4 mr-2"
                                        }), "Call"]
                                    }), (0, s.jsxs)(l.$, {
                                        onClick: () => window.open(i.CQ.links.whatsapp, "_blank"),
                                        size: "sm",
                                        className: "bg-green-600 hover:bg-green-700 text-white",
                                        children: [(0, s.jsx)(o.A, {
                                            className: "w-4 h-4 mr-2"
                                        }), "WhatsApp"]
                                    })]
                                })]
                            })
                        })
                    }), (0, s.jsxs)("div", {
                        className: "relative z-10 text-center px-4 max-w-5xl mx-auto",
                        children: [(0, s.jsxs)("div", {
                            className: "transition-all duration-1000 transform ".concat(t ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"),
                            children: [(0, s.jsxs)("h1", {
                                className: "text-5xl md:text-7xl font-bold text-white mb-6 leading-tight",
                                children: [(0, s.jsx)("span", {
                                    className: "bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent",
                                    children: "Service Mobil"
                                }), (0, s.jsx)("br", {}), (0, s.jsx)("span", {
                                    className: "text-white",
                                    children: "Terpercaya"
                                })]
                            }), (0, s.jsx)("p", {
                                className: "text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed",
                                children: "Solusi lengkap untuk kebutuhan service mobil dan sparepart berkualitas. Teknisi profesional dengan garansi layanan terbaik."
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
                                children: [(0, s.jsxs)(l.$, {
                                    onClick: () => window.open(i.CQ.links.whatsapp, "_blank"),
                                    size: "lg",
                                    className: "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-6 text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-200",
                                    children: [(0, s.jsx)(o.A, {
                                        className: "w-5 h-5 mr-3"
                                    }), "Konsultasi Gratis"]
                                }), (0, s.jsx)(l.$, {
                                    onClick: () => m("services"),
                                    size: "lg",
                                    variant: "outline",
                                    className: "bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold backdrop-blur-sm",
                                    children: "Lihat Layanan"
                                })]
                            })]
                        }), (0, s.jsx)("div", {
                            className: "mt-16 grid grid-cols-2 md:grid-cols-4 gap-8",
                            children: [{
                                number: "10+",
                                label: "Tahun Pengalaman"
                            }, {
                                number: "1000+",
                                label: "Pelanggan Puas"
                            }, {
                                number: "24/7",
                                label: "Layanan Darurat"
                            }, {
                                number: "100%",
                                label: "Garansi"
                            }].map((e, a) => (0, s.jsxs)("div", {
                                className: "transition-all duration-700 delay-".concat(100 * a, " transform ").concat(t ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"),
                                children: [(0, s.jsx)("div", {
                                    className: "text-3xl md:text-4xl font-bold text-white mb-2",
                                    children: e.number
                                }), (0, s.jsx)("div", {
                                    className: "text-white/70 text-sm md:text-base",
                                    children: e.label
                                })]
                            }, a))
                        })]
                    }), (0, s.jsx)("div", {
                        className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce",
                        children: (0, s.jsx)("button", {
                            onClick: () => m("about"),
                            className: "text-white/60 hover:text-white transition-colors duration-200",
                            children: (0, s.jsx)(c, {
                                className: "w-8 h-8"
                            })
                        })
                    })]
                })
            }
        },
        4827: (e, a, t) => {
            "use strict";
            t.d(a, {
                default: () => m
            });
            var s = t(5155),
                n = t(2115),
                l = t(285),
                i = t(6695),
                r = t(5125),
                o = t(9946);
            let c = (0, o.A)("circle-check-big", [
                    ["path", {
                        d: "M21.801 10A10 10 0 1 1 17 3.335",
                        key: "yps3ct"
                    }],
                    ["path", {
                        d: "m9 11 3 3L22 4",
                        key: "1pflzl"
                    }]
                ]),
                d = (0, o.A)("arrow-right", [
                    ["path", {
                        d: "M5 12h14",
                        key: "1ays0h"
                    }],
                    ["path", {
                        d: "m12 5 7 7-7 7",
                        key: "xquz4c"
                    }]
                ]);

            function m() {
                let [e, a] = (0, n.useState)(!1), [t, o] = (0, n.useState)(null), m = (0, n.useRef)(null);
                return (0, n.useEffect)(() => {
                    let e = new IntersectionObserver(e => {
                        let [t] = e;
                        t.isIntersecting && a(!0)
                    }, {
                        threshold: .1
                    });
                    return m.current && e.observe(m.current), () => {
                        m.current && e.unobserve(m.current)
                    }
                }, []), (0, s.jsx)("section", {
                    id: "services",
                    ref: m,
                    className: "py-20 bg-slate-50",
                    children: (0, s.jsxs)("div", {
                        className: "container mx-auto px-4",
                        children: [(0, s.jsxs)("div", {
                            className: "text-center mb-16",
                            children: [(0, s.jsxs)("h2", {
                                className: "text-4xl md:text-5xl font-bold text-slate-900 mb-4 transition-all duration-1000 transform ".concat(e ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"),
                                children: ["Layanan ", (0, s.jsx)("span", {
                                    className: "text-blue-600",
                                    children: "Kami"
                                })]
                            }), (0, s.jsx)("p", {
                                className: "text-xl text-slate-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 transform ".concat(e ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"),
                                children: "Kami menyediakan berbagai layanan perawatan mobil yang lengkap dan profesional untuk menjaga kendaraan Anda tetap dalam kondisi prima."
                            })]
                        }), (0, s.jsx)("div", {
                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: r.$p.map((a, n) => (0, s.jsxs)(i.Zp, {
                                className: "border-slate-200 hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 bg-white ".concat(t === n ? "ring-2 ring-blue-600" : "", " ").concat(e ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"),
                                style: {
                                    transitionDelay: "".concat(100 * n, "ms")
                                },
                                onMouseEnter: () => o(n),
                                onMouseLeave: () => o(null),
                                children: [(0, s.jsxs)(i.aR, {
                                    className: "text-center pb-4",
                                    children: [(0, s.jsx)("div", {
                                        className: "text-5xl mb-4 transition-transform duration-300 ".concat(t === n ? "scale-110" : ""),
                                        children: a.icon
                                    }), (0, s.jsx)(i.ZB, {
                                        className: "text-xl font-bold text-slate-900",
                                        children: a.title
                                    })]
                                }), (0, s.jsxs)(i.Wu, {
                                    className: "space-y-4",
                                    children: [(0, s.jsx)("p", {
                                        className: "text-slate-600 text-center leading-relaxed",
                                        children: a.description
                                    }), (0, s.jsx)("div", {
                                        className: "space-y-2",
                                        children: a.features.map((e, a) => (0, s.jsxs)("div", {
                                            className: "flex items-center space-x-2",
                                            children: [(0, s.jsx)(c, {
                                                className: "w-4 h-4 text-green-600 flex-shrink-0"
                                            }), (0, s.jsx)("span", {
                                                className: "text-sm text-slate-700",
                                                children: e
                                            })]
                                        }, a))
                                    }), (0, s.jsxs)(l.$, {
                                        onClick: () => window.open(r.CQ.links.whatsapp, "_blank"),
                                        className: "w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white mt-4 group",
                                        children: ["Pesan Layanan", (0, s.jsx)(d, {
                                            className: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                                        })]
                                    })]
                                })]
                            }, n))
                        }), (0, s.jsx)("div", {
                            className: "mt-16 text-center transition-all duration-1000 delay-700 transform ".concat(e ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"),
                            children: (0, s.jsxs)("div", {
                                className: "bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl p-8 md:p-12 text-white",
                                children: [(0, s.jsx)("h3", {
                                    className: "text-2xl md:text-3xl font-bold mb-4",
                                    children: "Butuh Bantuan Memilih Layanan?"
                                }), (0, s.jsx)("p", {
                                    className: "text-white/90 mb-6 max-w-2xl mx-auto",
                                    children: "Konsultasikan kebutuhan mobil Anda dengan tim ahli kami. Kami akan membantu menemukan solusi terbaik untuk kendaraan kesayangan Anda."
                                }), (0, s.jsxs)("div", {
                                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                                    children: [(0, s.jsx)(l.$, {
                                        onClick: () => window.open(r.CQ.links.whatsapp, "_blank"),
                                        size: "lg",
                                        className: "bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 font-semibold",
                                        children: "Konsultasi Gratis"
                                    }), (0, s.jsx)(l.$, {
                                        onClick: () => window.open(r.CQ.links.phone, "_blank"),
                                        size: "lg",
                                        variant: "outline",
                                        className: "bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-4 font-semibold backdrop-blur-sm",
                                        children: "Hubungi Kami"
                                    })]
                                })]
                            })
                        })]
                    })
                })
            }
        },
        5125: (e, a, t) => {
            "use strict";
            t.d(a, {
                $p: () => l,
                CQ: () => s,
                Lg: () => n,
                nV: () => r,
                yy: () => i
            });
            let s = {
                    name: "Ajijaya Automobile",
                    description: "Jasa service mobil dan sparepart terpercaya dengan pelayanan profesional dan berkualitas",
                    url: "https://ajijaya-automobile.com",
                    ogImage: "/og.jpg",
                    links: {
                        whatsapp: "https://wa.me/6281234567890",
                        phone: "+6281234567890",
                        email: "info@ajijaya-automobile.com",
                        address: "Bengkel mobil aji jaya automobile, Alamat lengkap : Gelam Jaya, Kec. Ps. Kemis, Kabupaten Tangerang, Banten 15560"
                    }
                },
                n = [{
                    name: "Beranda",
                    href: "#home"
                }, {
                    name: "Tentang",
                    href: "#about"
                }, {
                    name: "Layanan",
                    href: "#services"
                }, {
                    name: "Mengapa Memilih Kami",
                    href: "#why-choose-us"
                }, {
                    name: "Kontak",
                    href: "#contact"
                }],
                l = [{
                    title: "Service Berkala",
                    description: "Perawatan rutin untuk menjaga performa mobil Anda tetap optimal",
                    icon: "\uD83D\uDD27",
                    features: ["Ganti oli", "Filter replacement", "Inspection lengkap", "Tune up"]
                }, {
                    title: "Service AC Mobil",
                    description: "Perbaikan dan perawatan sistem AC mobil untuk kenyamanan berkendara",
                    icon: "❄️",
                    features: ["Freon refill", "Cleaning evaporator", "Repair compressor", "Installation baru"]
                }, {
                    title: "Ganti Oli & Filter",
                    description: "Penggantian oli dan filter berkualitas untuk mesin yang sehat",
                    icon: "\uD83D\uDEE2️",
                    features: ["Oli synthetic", "Oli mineral", "Filter oli", "Filter udara"]
                }, {
                    title: "Sparepart Mobil",
                    description: "Menyediakan berbagai sparepart mobil berkualitas dengan harga terjangkau",
                    icon: "⚙️",
                    features: ["Ori & OEM", "Garansi resmi", "Harga bersaing", "Ketersediaan stok"]
                }, {
                    title: "Engine Diagnostics",
                    description: "Diagnosa mesin modern dengan teknologi terkini",
                    icon: "\uD83D\uDD0D",
                    features: ["Scanning ECU", "Error code reading", "Performance test", "Solution recommendation"]
                }, {
                    title: "Body Repair & Painting",
                    description: "Perbaikan body dan cat mobil untuk tampilan seperti baru",
                    icon: "\uD83C\uDFA8",
                    features: ["Dent removal", "Scratch repair", "Full painting", "Color matching"]
                }],
                i = [{
                    title: "Teknisi Berpengalaman",
                    description: "Tim teknisi profesional dengan sertifikat dan pengalaman lebih dari 10 tahun",
                    icon: "\uD83D\uDC68‍\uD83D\uDD27"
                }, {
                    title: "Harga Transparan",
                    description: "Tidak ada biaya tersembunyi, semua harga jelas dan terjangkau",
                    icon: "\uD83D\uDCB0"
                }, {
                    title: "Garansi Layanan",
                    description: "Garansi untuk semua layanan yang kami berikan untuk kepuasan pelanggan",
                    icon: "\uD83D\uDEE1️"
                }, {
                    title: "Peralatan Modern",
                    description: "Menggunakan peralatan terkini untuk hasil yang presisi dan berkualitas",
                    icon: "\uD83D\uDD27"
                }, {
                    title: "Layanan Cepat",
                    description: "Pelayanan yang efisien tanpa mengurangi kualitas pekerjaan",
                    icon: "⚡"
                }, {
                    title: "Sparepart Berkualitas",
                    description: "Menggunakan sparepart original dan berkualitas tinggi",
                    icon: "✅"
                }],
                r = ["/images/service-1.jpg", "/images/service-2.jpg", "/images/service-3.jpg", "/images/service-4.jpg", "/images/service-5.jpg", "/images/service-6.jpg"]
        },
        5906: (e, a, t) => {
            "use strict";
            t.d(a, {
                default: () => p
            });
            var s = t(5155),
                n = t(2115),
                l = t(6695),
                i = t(5125),
                r = t(285),
                o = t(9946);
            let c = (0, o.A)("wrench", [
                    ["path", {
                        d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
                        key: "cbrjhi"
                    }]
                ]),
                d = (0, o.A)("star", [
                    ["path", {
                        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
                        key: "r04s7s"
                    }]
                ]),
                m = (0, o.A)("shield", [
                    ["path", {
                        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
                        key: "oel41y"
                    }]
                ]);
            var x = t(4186),
                h = t(9037),
                u = t(7580);

            function p() {
                let [e, a] = (0, n.useState)(!1), [t, o] = (0, n.useState)(null), p = (0, n.useRef)(null);
                (0, n.useEffect)(() => {
                    let e = new IntersectionObserver(e => {
                        let [t] = e;
                        t.isIntersecting && a(!0)
                    }, {
                        threshold: .1
                    });
                    return p.current && e.observe(p.current), () => {
                        p.current && e.unobserve(p.current)
                    }
                }, []);
                let b = {
                    "\uD83D\uDC68‍\uD83D\uDD27": (0, s.jsx)(c, {
                        className: "w-8 h-8"
                    }),
                    "\uD83D\uDCB0": (0, s.jsx)(d, {
                        className: "w-8 h-8"
                    }),
                    "\uD83D\uDEE1️": (0, s.jsx)(m, {
                        className: "w-8 h-8"
                    }),
                    "\uD83D\uDD27": (0, s.jsx)(c, {
                        className: "w-8 h-8"
                    }),
                    "⚡": (0, s.jsx)(x.A, {
                        className: "w-8 h-8"
                    }),
                    "✅": (0, s.jsx)(h.A, {
                        className: "w-8 h-8"
                    })
                };
                return (0, s.jsx)("section", {
                    id: "why-choose-us",
                    ref: p,
                    className: "py-20 bg-white",
                    children: (0, s.jsxs)("div", {
                        className: "container mx-auto px-4",
                        children: [(0, s.jsxs)("div", {
                            className: "text-center mb-16",
                            children: [(0, s.jsxs)("h2", {
                                className: "text-4xl md:text-5xl font-bold text-slate-900 mb-4 transition-all duration-1000 transform ".concat(e ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"),
                                children: ["Mengapa Memilih ", (0, s.jsx)("span", {
                                    className: "text-blue-600",
                                    children: "Ajijaya Automobile"
                                })]
                            }), (0, s.jsx)("p", {
                                className: "text-xl text-slate-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 transform ".concat(e ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"),
                                children: "Kami berkomitmen memberikan layanan terbaik dengan standar kualitas tinggi untuk kepuasan pelanggan setia kami."
                            })]
                        }), (0, s.jsx)("div", {
                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16",
                            children: i.yy.map((a, n) => (0, s.jsx)(l.Zp, {
                                className: "border-slate-200 hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1 bg-gradient-to-br from-white to-slate-50 ".concat(t === n ? "ring-2 ring-blue-600" : "", " ").concat(e ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"),
                                style: {
                                    transitionDelay: "".concat(100 * n, "ms")
                                },
                                onMouseEnter: () => o(n),
                                onMouseLeave: () => o(null),
                                children: (0, s.jsxs)(l.Wu, {
                                    className: "p-6 text-center",
                                    children: [(0, s.jsx)("div", {
                                        className: "text-blue-600 mb-4 transition-transform duration-300 ".concat(t === n ? "scale-110" : ""),
                                        children: b[a.icon] || (0, s.jsx)(u.A, {
                                            className: "w-8 h-8"
                                        })
                                    }), (0, s.jsx)("h3", {
                                        className: "text-xl font-bold text-slate-900 mb-3",
                                        children: a.title
                                    }), (0, s.jsx)("p", {
                                        className: "text-slate-600 leading-relaxed",
                                        children: a.description
                                    })]
                                })
                            }, n))
                        }), (0, s.jsxs)("div", {
                            className: "mb-16 transition-all duration-1000 delay-700 transform ".concat(e ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"),
                            children: [(0, s.jsxs)("h3", {
                                className: "text-3xl font-bold text-center text-slate-900 mb-12",
                                children: ["Apa Kata ", (0, s.jsx)("span", {
                                    className: "text-blue-600",
                                    children: "Pelanggan Kami"
                                })]
                            }), (0, s.jsx)("div", {
                                className: "grid md:grid-cols-3 gap-8",
                                children: [{
                                    name: "Budi Santoso",
                                    role: "Pelanggan Setia",
                                    content: "Pelayanan sangat memuaskan, teknisi ramah dan profesional. Harga juga terjangkau.",
                                    rating: 5
                                }, {
                                    name: "Siti Nurhaliza",
                                    role: "Pelanggan Baru",
                                    content: "Hasil service mobil saya sangat bagus, AC kembali dingin dan mesin lebih halus.",
                                    rating: 5
                                }, {
                                    name: "Ahmad Fauzi",
                                    role: "Pelanggan Corporate",
                                    content: "Kami percayakan armada perusahaan ke Ajijaya Automobile. Selalu tepat waktu dan berkualitas.",
                                    rating: 5
                                }].map((e, a) => (0, s.jsx)(l.Zp, {
                                    className: "border-slate-200 bg-white hover:shadow-lg transition-shadow duration-300",
                                    children: (0, s.jsxs)(l.Wu, {
                                        className: "p-6",
                                        children: [(0, s.jsx)("div", {
                                            className: "flex mb-4",
                                            children: [...Array(e.rating)].map((e, a) => (0, s.jsx)(d, {
                                                className: "w-5 h-5 text-yellow-500 fill-current"
                                            }, a))
                                        }), (0, s.jsxs)("p", {
                                            className: "text-slate-600 mb-4 italic",
                                            children: ['"', e.content, '"']
                                        }), (0, s.jsxs)("div", {
                                            className: "flex items-center space-x-3",
                                            children: [(0, s.jsx)("div", {
                                                className: "w-12 h-12 bg-gradient-to-br from-blue-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold",
                                                children: e.name.charAt(0)
                                            }), (0, s.jsxs)("div", {
                                                children: [(0, s.jsx)("div", {
                                                    className: "font-semibold text-slate-900",
                                                    children: e.name
                                                }), (0, s.jsx)("div", {
                                                    className: "text-sm text-slate-600",
                                                    children: e.role
                                                })]
                                            })]
                                        })]
                                    })
                                }, a))
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white text-center transition-all duration-1000 delay-900 transform ".concat(e ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"),
                            children: [(0, s.jsx)("h3", {
                                className: "text-2xl md:text-3xl font-bold mb-4",
                                children: "Siap Melayani Kebutuhan Mobil Anda"
                            }), (0, s.jsx)("p", {
                                className: "text-white/90 mb-8 max-w-2xl mx-auto text-lg",
                                children: "Bergabunglah dengan ribuan pelanggan puas yang telah mempercayakan kendaraan mereka kepada kami."
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-col sm:flex-row gap-4 justify-center",
                                children: [(0, s.jsx)(r.$, {
                                    onClick: () => window.open(i.CQ.links.whatsapp, "_blank"),
                                    size: "lg",
                                    className: "bg-green-600 hover:bg-green-700 text-white px-8 py-4 font-semibold",
                                    children: "Hubungi WhatsApp"
                                }), (0, s.jsx)(r.$, {
                                    onClick: () => window.open("tel:".concat(i.CQ.links.phone), "_blank"),
                                    size: "lg",
                                    variant: "outline",
                                    className: "bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-4 font-semibold backdrop-blur-sm",
                                    children: "Call Sekarang"
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        6030: (e, a, t) => {
            "use strict";
            t.d(a, {
                default: () => u
            });
            var s = t(5155),
                n = t(2115),
                l = t(285),
                i = t(6695),
                r = t(5125),
                o = t(1366),
                c = t(9420),
                d = t(8883),
                m = t(4516);
            let x = (0, t(9946).A)("chevron-right", [
                ["path", {
                    d: "m9 18 6-6-6-6",
                    key: "mthhwq"
                }]
            ]);
            var h = t(4186);

            function u() {
                let [e, a] = (0, n.useState)(!1), t = (0, n.useRef)(null);
                (0, n.useEffect)(() => {
                    let e = new IntersectionObserver(e => {
                        let [t] = e;
                        t.isIntersecting && a(!0)
                    }, {
                        threshold: .1
                    });
                    return t.current && e.observe(t.current), () => {
                        t.current && e.unobserve(t.current)
                    }
                }, []);
                let u = [{
                    icon: (0, s.jsx)(o.A, {
                        className: "w-6 h-6"
                    }),
                    label: "WhatsApp",
                    value: "+62 838-1256-0767",
                    action: () => window.open(r.CQ.links.whatsapp, "_blank"),
                    color: "bg-green-600 hover:bg-green-700"
                }, {
                    icon: (0, s.jsx)(c.A, {
                        className: "w-6 h-6"
                    }),
                    label: "Telepon",
                    value: "+62 838-1256-0767",
                    action: () => window.open("tel:".concat(r.CQ.links.phone), "_blank"),
                    color: "bg-blue-600 hover:bg-blue-700"
                }, {
                    icon: (0, s.jsx)(d.A, {
                        className: "w-6 h-6"
                    }),
                    label: "Email",
                    value: "info@ajijaya-automobile.com",
                    action: () => window.open("mailto:".concat(r.CQ.links.email), "_blank"),
                    color: "bg-orange-600 hover:bg-orange-700"
                }, {
                    icon: (0, s.jsx)(m.A, {
                        className: "w-6 h-6"
                    }),
                    label: "Alamat",
                    value: "Gelam Jaya, Kec. Ps. Kemis, Kabupaten Tangerang, Banten 15560",
                    action: () => window.open("https://maps.google.com/?q=".concat(encodeURIComponent(r.CQ.links.address)), "_blank"),
                    color: "bg-purple-600 hover:bg-purple-700"
                }];
                return (0, s.jsx)("section", {
                    id: "contact",
                    ref: t,
                    className: "py-20 bg-slate-50",
                    children: (0, s.jsxs)("div", {
                        className: "container mx-auto px-4",
                        children: [(0, s.jsxs)("div", {
                            className: "text-center mb-16",
                            children: [(0, s.jsxs)("h2", {
                                className: "text-4xl md:text-5xl font-bold text-slate-900 mb-4 transition-all duration-1000 transform ".concat(e ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"),
                                children: ["Hubungi ", (0, s.jsx)("span", {
                                    className: "text-blue-600",
                                    children: "Kami"
                                })]
                            }), (0, s.jsx)("p", {
                                className: "text-xl text-slate-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 transform ".concat(e ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"),
                                children: "Siap melayani kebutuhan service mobil dan sparepart Anda. Hubungi kami untuk konsultasi gratis atau janji temu."
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "grid lg:grid-cols-2 gap-12",
                            children: [(0, s.jsxs)("div", {
                                className: "space-y-6 transition-all duration-1000 delay-300 transform ".concat(e ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"),
                                children: [(0, s.jsxs)("div", {
                                    children: [(0, s.jsx)("h3", {
                                        className: "text-2xl font-bold text-slate-900 mb-6",
                                        children: "Informasi Kontak"
                                    }), (0, s.jsx)("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                        children: u.map((e, a) => (0, s.jsx)(i.Zp, {
                                            className: "border-slate-200 hover:shadow-lg transition-all duration-300 cursor-pointer group",
                                            onClick: e.action,
                                            children: (0, s.jsx)(i.Wu, {
                                                className: "p-4",
                                                children: (0, s.jsxs)("div", {
                                                    className: "flex items-center space-x-3",
                                                    children: [(0, s.jsx)("div", {
                                                        className: "p-3 rounded-lg text-white ".concat(e.color, " group-hover:scale-110 transition-transform duration-200"),
                                                        children: e.icon
                                                    }), (0, s.jsxs)("div", {
                                                        className: "flex-1",
                                                        children: [(0, s.jsx)("div", {
                                                            className: "text-sm text-slate-600 mb-1",
                                                            children: e.label
                                                        }), (0, s.jsx)("div", {
                                                            className: "font-semibold text-slate-900",
                                                            children: e.value
                                                        })]
                                                    }), (0, s.jsx)(x, {
                                                        className: "w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors"
                                                    })]
                                                })
                                            })
                                        }, a))
                                    })]
                                }), (0, s.jsxs)("div", {
                                    children: [(0, s.jsx)("h3", {
                                        className: "text-2xl font-bold text-slate-900 mb-6",
                                        children: "Jam Operasional"
                                    }), (0, s.jsx)(i.Zp, {
                                        className: "border-slate-200",
                                        children: (0, s.jsx)(i.Wu, {
                                            className: "p-6",
                                            children: (0, s.jsx)("div", {
                                                className: "space-y-4",
                                                children: [{
                                                    day: "Senin - Jumat",
                                                    hours: "08:00 - 18:00"
                                                }, {
                                                    day: "Sabtu",
                                                    hours: "08:00 - 15:00"
                                                }, {
                                                    day: "Minggu",
                                                    hours: "Tutup"
                                                }, {
                                                    day: "Hari Libur",
                                                    hours: "Tutup"
                                                }].map((e, a) => (0, s.jsxs)("div", {
                                                    className: "flex items-center justify-between py-2 border-b border-slate-100 last:border-0",
                                                    children: [(0, s.jsxs)("div", {
                                                        className: "flex items-center space-x-3",
                                                        children: [(0, s.jsx)(h.A, {
                                                            className: "w-5 h-5 text-blue-600"
                                                        }), (0, s.jsx)("span", {
                                                            className: "font-medium text-slate-900",
                                                            children: e.day
                                                        })]
                                                    }), (0, s.jsx)("span", {
                                                        className: "font-semibold ".concat("Tutup" === e.hours ? "text-red-600" : "text-green-600"),
                                                        children: e.hours
                                                    })]
                                                }, a))
                                            })
                                        })
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "space-y-6 transition-all duration-1000 delay-500 transform ".concat(e ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"),
                                children: [(0, s.jsxs)("div", {
                                    children: [(0, s.jsx)("h3", {
                                        className: "text-2xl font-bold text-slate-900 mb-6",
                                        children: "Layanan Cepat"
                                    }), (0, s.jsxs)("div", {
                                        className: "space-y-4",
                                        children: [(0, s.jsx)(i.Zp, {
                                            className: "border-slate-200 hover:shadow-lg transition-all duration-300",
                                            children: (0, s.jsx)(i.Wu, {
                                                className: "p-6",
                                                children: (0, s.jsxs)("div", {
                                                    className: "text-center",
                                                    children: [(0, s.jsx)("div", {
                                                        className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",
                                                        children: (0, s.jsx)(o.A, {
                                                            className: "w-8 h-8 text-green-600"
                                                        })
                                                    }), (0, s.jsx)("h4", {
                                                        className: "text-xl font-bold text-slate-900 mb-2",
                                                        children: "Konsultasi WhatsApp"
                                                    }), (0, s.jsx)("p", {
                                                        className: "text-slate-600 mb-4",
                                                        children: "Dapatkan jawaban cepat untuk pertanyaan Anda tentang layanan kami"
                                                    }), (0, s.jsxs)(l.$, {
                                                        onClick: () => window.open(r.CQ.links.whatsapp, "_blank"),
                                                        className: "w-full bg-green-600 hover:bg-green-700 text-white",
                                                        children: [(0, s.jsx)(o.A, {
                                                            className: "w-4 h-4 mr-2"
                                                        }), "Mulai Chat"]
                                                    })]
                                                })
                                            })
                                        }), (0, s.jsx)(i.Zp, {
                                            className: "border-slate-200 hover:shadow-lg transition-all duration-300",
                                            children: (0, s.jsx)(i.Wu, {
                                                className: "p-6",
                                                children: (0, s.jsxs)("div", {
                                                    className: "text-center",
                                                    children: [(0, s.jsx)("div", {
                                                        className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4",
                                                        children: (0, s.jsx)(c.A, {
                                                            className: "w-8 h-8 text-blue-600"
                                                        })
                                                    }), (0, s.jsx)("h4", {
                                                        className: "text-xl font-bold text-slate-900 mb-2",
                                                        children: "Panggilan Darurat"
                                                    }), (0, s.jsx)("p", {
                                                        className: "text-slate-600 mb-4",
                                                        children: "Butuh bantuan segera? Hubungi kami untuk layanan darurat 24/7"
                                                    }), (0, s.jsxs)(l.$, {
                                                        onClick: () => window.open("tel:".concat(r.CQ.links.phone), "_blank"),
                                                        className: "w-full bg-blue-600 hover:bg-blue-700 text-white",
                                                        children: [(0, s.jsx)(c.A, {
                                                            className: "w-4 h-4 mr-2"
                                                        }), "Call Sekarang"]
                                                    })]
                                                })
                                            })
                                        })]
                                    })]
                                }), (0, s.jsx)(i.Zp, {
                                    className: "border-slate-200 overflow-hidden",
                                    children: (0, s.jsx)(i.Wu, {
                                        className: "p-0",
                                        children: (0, s.jsxs)("div", {
                                            className: "bg-gradient-to-br from-blue-600 to-orange-600 p-6 text-white",
                                            children: [(0, s.jsx)("h4", {
                                                className: "text-xl font-bold mb-2",
                                                children: "Kunjungi Bengkel Kami"
                                            }), (0, s.jsx)("p", {
                                                className: "text-white/90 mb-4",
                                                children: r.CQ.links.address
                                            }), (0, s.jsxs)(l.$, {
                                                onClick: () => window.open("https://maps.google.com/?q=".concat(encodeURIComponent(r.CQ.links.address)), "_blank"),
                                                variant: "outline",
                                                className: "bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm",
                                                children: [(0, s.jsx)(m.A, {
                                                    className: "w-4 h-4 mr-2"
                                                }), "Buka Maps"]
                                            })]
                                        })
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        6695: (e, a, t) => {
            "use strict";
            t.d(a, {
                Wu: () => o,
                ZB: () => r,
                Zp: () => l,
                aR: () => i
            });
            var s = t(5155);
            t(2115);
            var n = t(9434);

            function l(e) {
                let {
                    className: a,
                    ...t
                } = e;
                return (0, s.jsx)("div", {
                    "data-slot": "card",
                    className: (0, n.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", a),
                    ...t
                })
            }

            function i(e) {
                let {
                    className: a,
                    ...t
                } = e;
                return (0, s.jsx)("div", {
                    "data-slot": "card-header",
                    className: (0, n.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", a),
                    ...t
                })
            }

            function r(e) {
                let {
                    className: a,
                    ...t
                } = e;
                return (0, s.jsx)("div", {
                    "data-slot": "card-title",
                    className: (0, n.cn)("leading-none font-semibold", a),
                    ...t
                })
            }

            function o(e) {
                let {
                    className: a,
                    ...t
                } = e;
                return (0, s.jsx)("div", {
                    "data-slot": "card-content",
                    className: (0, n.cn)("px-6", a),
                    ...t
                })
            }
        },
        7580: (e, a, t) => {
            "use strict";
            t.d(a, {
                A: () => s
            });
            let s = (0, t(9946).A)("users", [
                ["path", {
                    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
                    key: "1yyitq"
                }],
                ["path", {
                    d: "M16 3.128a4 4 0 0 1 0 7.744",
                    key: "16gr8j"
                }],
                ["path", {
                    d: "M22 21v-2a4 4 0 0 0-3-3.87",
                    key: "kshegd"
                }],
                ["circle", {
                    cx: "9",
                    cy: "7",
                    r: "4",
                    key: "nufk8"
                }]
            ])
        },
        8883: (e, a, t) => {
            "use strict";
            t.d(a, {
                A: () => s
            });
            let s = (0, t(9946).A)("mail", [
                ["path", {
                    d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
                    key: "132q7q"
                }],
                ["rect", {
                    x: "2",
                    y: "4",
                    width: "20",
                    height: "16",
                    rx: "2",
                    key: "izxlao"
                }]
            ])
        },
        9037: (e, a, t) => {
            "use strict";
            t.d(a, {
                A: () => s
            });
            let s = (0, t(9946).A)("award", [
                ["path", {
                    d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
                    key: "1yiouv"
                }],
                ["circle", {
                    cx: "12",
                    cy: "8",
                    r: "6",
                    key: "1vp47v"
                }]
            ])
        },
        9420: (e, a, t) => {
            "use strict";
            t.d(a, {
                A: () => s
            });
            let s = (0, t(9946).A)("phone", [
                ["path", {
                    d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
                    key: "9njp5v"
                }]
            ])
        },
        9434: (e, a, t) => {
            "use strict";
            t.d(a, {
                cn: () => l
            });
            var s = t(2596),
                n = t(9688);

            function l() {
                for (var e = arguments.length, a = Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                return (0, n.QP)((0, s.$)(a))
            }
        }
    },
    e => {
        var a = a => e(e.s = a);
        e.O(0, [455, 441, 684, 358], () => a(1034)), _N_E = e.O()
    }
]);
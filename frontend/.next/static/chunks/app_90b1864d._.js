(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const API_URL = "http://localhost:5000";
const __TURBOPACK__default__export__ = API_URL;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/alltasks/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AllTasksPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AllTasksPage() {
    _s();
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const fetchTasks = async ()=>{
        const token = localStorage.getItem("token");
        if (!token) return;
        const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], "/api/tasks"), {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        const data = await res.json();
        setTasks(data);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllTasksPage.useEffect": ()=>{
            fetchTasks();
        }
    }["AllTasksPage.useEffect"], []);
    const markDone = async (id)=>{
        const token = localStorage.getItem("token");
        await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], "/api/tasks/").concat(id), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
            },
            body: JSON.stringify({
                status: "Completed"
            })
        });
        router.push("/dashboard"); // Redirect after marking completed
    };
    const deleteTask = async (id)=>{
        const token = localStorage.getItem("token");
        await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], "/api/tasks/").concat(id), {
            method: "DELETE",
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        setTasks(tasks.filter((t)=>t._id !== id));
    };
    const editTask = async (task)=>{
        const newTitle = prompt("Edit Task Title", task.title);
        if (!newTitle) return;
        const token = localStorage.getItem("token");
        await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], "/api/tasks/").concat(task._id), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
            },
            body: JSON.stringify({
                title: newTitle
            })
        });
        fetchTasks(); // Refresh list
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tasks-background flex flex-col items-center min-h-screen py-8 gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-blue-700 text-center",
                children: "All Tasks"
            }, void 0, false, {
                fileName: "[project]/app/alltasks/page.js",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-3xl flex justify-end mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>router.push("/create"),
                    className: "btn-primary",
                    children: "+ Create Task"
                }, void 0, false, {
                    fileName: "[project]/app/alltasks/page.js",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/alltasks/page.js",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 w-full max-w-3xl",
                children: tasks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-gray-500",
                    children: "No tasks yet."
                }, void 0, false, {
                    fileName: "[project]/app/alltasks/page.js",
                    lineNumber: 70,
                    columnNumber: 11
                }, this) : tasks.map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "task-card flex justify-between items-start gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-semibold text-lg",
                                        children: task.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/alltasks/page.js",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: task.status === "Completed" ? "text-green-600" : "text-red-500",
                                        children: task.status
                                    }, void 0, false, {
                                        fileName: "[project]/app/alltasks/page.js",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700",
                                        children: task.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/alltasks/page.js",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/alltasks/page.js",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 items-end",
                                children: [
                                    task.status !== "Completed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>markDone(task._id),
                                        className: "btn-primary-small",
                                        children: "Mark Done"
                                    }, void 0, false, {
                                        fileName: "[project]/app/alltasks/page.js",
                                        lineNumber: 83,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>editTask(task),
                                        className: "text-blue-600 hover:text-blue-800",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEdit"], {}, void 0, false, {
                                            fileName: "[project]/app/alltasks/page.js",
                                            lineNumber: 88,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/alltasks/page.js",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>deleteTask(task._id),
                                        className: "text-red-600 hover:text-red-800",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTrash"], {}, void 0, false, {
                                            fileName: "[project]/app/alltasks/page.js",
                                            lineNumber: 91,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/alltasks/page.js",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/alltasks/page.js",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this)
                        ]
                    }, task._id, true, {
                        fileName: "[project]/app/alltasks/page.js",
                        lineNumber: 73,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/alltasks/page.js",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/alltasks/page.js",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(AllTasksPage, "b43mLSdVTiLQp7xj4d5jahhYQBY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AllTasksPage;
var _c;
__turbopack_context__.k.register(_c, "AllTasksPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_90b1864d._.js.map
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
    const categories = [
        {
            title: "Hooks",
            items: [
                { name: "use", path: "/hooks/use" },
                { name: "useOptimistic", path: "/hooks/useOptimistic" },
                { name: "useFormStatus", path: "/hooks/useFormStatus" },
                { name: "useFormState", path: "/hooks/useFormState" },
            ],
        },
        {
            title: "Server Components",
            items: [
                { name: "Server Component 기본", path: "/server/basic" },
                { name: "Streaming", path: "/server/streaming" },
            ],
        },
        {
            title: "More",
            items: [
                { name: "Actions", path: "/more/actions" },
                { name: "Document Metadata", path: "/more/metadata" },
            ],
        },
    ];

    return (
        <div className="home">
            <h1>React 19 테스트 페이지</h1>
            <div className="categories">
                {categories.map((category) => (
                    <div key={category.title} className="category">
                        <h2>{category.title}</h2>
                        <div className="menu-items">
                            {category.items.map((item) => (
                                <Link key={item.path} to={item.path} className="menu-link">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function TestPage() {
    return (
        <div className="test-page">
            <h1>테스트 페이지</h1>
            <div className="navigation">
                <Link to="/" className="nav-link">
                    홈으로 돌아가기
                </Link>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hooks/*" element={<TestPage />} />
                <Route path="/server/*" element={<TestPage />} />
                <Route path="/more/*" element={<TestPage />} />
            </Routes>
        </div>
    );
}

export default App;

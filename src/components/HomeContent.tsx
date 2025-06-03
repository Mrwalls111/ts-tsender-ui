import AirdropForm from "./AirdropForm"
import { useState } from "react"

export default function HomeContent() {
    const [isUnsafeMode, setIsUnsafeMode] = useState(false)

    return (
        <div>
            <AirdropForm
                isUnsafeMode={isUnsafeMode}
                onModeChange={setIsUnsafeMode}
            />
        </div>
    )
}
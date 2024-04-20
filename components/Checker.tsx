"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FaQuestion } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { types } from "util";

interface CheckerProps {
    icon: IconType
    name: string,
}
export function Checker({ icon, name }: CheckerProps) {
    const IconComponent = icon;
    return (
        <div className="flex items-center justify-between rounded-md border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
            <div className="flex items-center space-x-3">
                {<IconComponent />}
                <div>
                    <h4 className="font-medium">{name}</h4>
                </div>
            </div>
        </div>
    )
}
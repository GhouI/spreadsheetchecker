"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checker } from "@/components/Checker";
import { FaQuestion} from "react-icons/fa";
import { GoCheck, GoX } from "react-icons/go";

import React, { useState } from "react";
import { SpreadSheets } from "@/lib/types";
export default function Home() {
  const [spreadsheet, setSpreadsheet] = useState<SpreadSheets[]>([]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSpreadsheet([...spreadsheet, {
      data: [formData]
    }]);
    setFormData({ name: '', Icon: FaQuestion, URL: '' });
  }
  const [formData, setFormData] = useState({
    URL: '',
    name: '',
    Icon: FaQuestion,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <main className="space-y-16">
      <form onSubmit={handleSubmit}>
        <div className="flex w-full max-w-md items-center">
          <Input className="flex-1" placeholder="Enter Google Doc link" type="text" name="URL" value={formData.URL} onChange={handleChange} />
          <Input className="flex-1" placeholder="Sheet Name" type="text" name="name" value={formData.name} onChange={handleChange} />
          <Button type="submit" >Add</Button>
        </div>
      </form>
      {spreadsheet.length > 0 && (
        <div className="flex max-w-md items-center">
          <Input className="flex-1" placeholder="What value to search in these textboxes?" type="number" />
          <Button>Search</Button>
        </div>
      )}
      <div className="mt-6 space-y-4 max-w-md">
        <h3 className="text-lg font-medium">Spreadsheets Linked below</h3>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {spreadsheet.map((sheet) => (
            sheet.data.map((data) => (
              <Checker icon={data.Icon} name={data.name} />
            ))
          ))}
        </div>

      </div>
    </main>
  );
}

"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { toast } from "react-hot-toast";

interface Props {
  className?: string;
}

export const BannerSignUp: React.FC<Props> = ({ className }) => {
  const [userType, setUserType] = React.useState<string>("");
  const [isRobotChecked, setIsRobotChecked] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userType) {
      toast.error("Please select user type");
      return;
    }

    if (!isRobotChecked) {
      toast.error("Please confirm you're not a robot.");
      return;
    }

    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      name: formData.get("name"),
      phone: formData.get("phone"),
      userBalance: 0,
      userRole: "user",
      userStatus: "active",
      userType: userType,
    };

    console.log("Sending data to backend:", data);

    try {
      const res = await fetch("/api/new-users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        console.error("Signup failed:", err);
        toast.error("Signup failed.");
        return;
      }

      const result = await res.json();
      console.log("User created:", result);
      toast.success("User created successfully");
    } catch (err) {
      console.error("Error submitting form", err);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className={cn("max-w-[900px] mx-auto", className)}>
      <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          placeholder="NAME"
          className="border border-yellow-400"
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="EMAIL"
          className="border border-yellow-400"
          required
        />
        <Input
          name="password"
          type="password"
          placeholder="PASSWORD"
          className="border border-yellow-400"
          required
        />

        <Input
          name="phone"
          type="tel"
          placeholder="+374(***)******"
          className="border border-yellow-400"
          required
        />
        <Input
          name="websiteLink"
          type="url"
          placeholder="WEBSITE LINK"
          className="border border-yellow-400"
        />

        <Input
          name="facebookLink"
          type="url"
          placeholder="FACEBOOK LINK"
          className="border border-yellow-400"
        />
        <Input
          name="instagramLink"
          type="url"
          placeholder="INSTAGRAM LINK"
          className="border border-yellow-400"
        />

        <div className="col-span-2">
          <Select onValueChange={setUserType}>
            <SelectTrigger className="border border-yellow-400 rounded-md text-start h-10 px-3 text-sm">
              <SelectValue placeholder="INDIVIDUAL ENTREPRENEUR" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="individual">
                INDIVIDUAL ENTREPRENEUR
              </SelectItem>
              <SelectItem value="company">COMPANY</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <textarea
          name="aboutBrand"
          placeholder="ABOUT BRAND"
          className="border border-yellow-400 p-2 rounded-md col-span-1 min-h-[100px]"
        />
        <textarea
          name="description"
          placeholder="DESCRIPTION"
          className="border border-yellow-400 p-2 rounded-md col-span-1 min-h-[100px]"
        />

        <div className="col-span-2 flex items-center gap-2 mt-4">
          <Checkbox
            id="robot"
            checked={isRobotChecked}
            onCheckedChange={(val) => setIsRobotChecked(Boolean(val))}
          />
          <label htmlFor="robot" className="text-sm text-gray-700 font-medium">
            I'M NOT A ROBOT
          </label>
        </div>

        <button
          type="submit"
          className="col-span-2 bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md mt-4 hover:bg-yellow-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

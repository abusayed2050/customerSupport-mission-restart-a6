

## 1. What is JSX, and why is it used?

**Ans:**  
JSX এর অর্থ **JavaScript XML**।  
এটি দেখতে অনেকটা **HTML এর মত syntax**।  

React এ **User Interface (UI)** তৈরি করার জন্য JSX ব্যবহার করা হয়।  
JSX ব্যবহার করলে JavaScript এর ভিতরে HTML এর মত কোড লিখে সহজে UI তৈরি করা যায়।

---

## 2. What is the difference between State and Props?

**Ans:**

### State
- State পরিবর্তন করা যায়।
- Dynamic data রাখে।
- Component এর ভিতরে manage করা হয়।
- বাইরে থেকে সরাসরি data pass করা যায় না।

### Props
- Props পরিবর্তন করা যায় না (read-only)।
- এক component থেকে অন্য component এ data pass করার জন্য ব্যবহার করা হয়।
- Parent component থেকে Child component এ data পাঠানো হয়।

---

## 3. What is the useState hook, and how does it work?

**Ans:**  
`useState` হল React এর একটি **Hook** যা Functional Component এর মধ্যে **state তৈরি এবং manage করার জন্য** ব্যবহার করা হয়।

এটি একটি **array return করে**, যেখানে—

- প্রথম value → current state  
- দ্বিতীয় value → state update করার function  

---

## 4. How can you share state between components in React?

**Ans:**  
React-এ state share করার জন্য সাধারণত নিচের পদ্ধতিগুলো ব্যবহার করা হয়:

- **Lifting State Up**
- **Props**
- **Context API**

সাধারণত **Parent component**-এ state রাখা হয় এবং **props** বা **context** এর মাধ্যমে **child components**-এ share করা হয়।

---

## 5. How is event handling done in React?

**Ans:**  
React-এ event handling করার জন্য **camelCase format** ব্যবহার করা হয়।

উদাহরণ:
- `onClick`
- `onChange`

এখানে একটি **function reference** pass করা হয় যা event trigger হলে execute হয়।
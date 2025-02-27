import { useState } from "react";

interface Props {
    mainText: string;
    secondaryText: string;
    className?: string;
  }
  
  const NewsLetterSubscription = ({ mainText, secondaryText, className }: Props) => {
  
    const [email, setEmail] = useState<string>("")
  
    const handleNewsLetterFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log("Email submitted: ", email)
    }
  
    return (
      <div className={`p-6 bg-accent flex flex-row flex-nowrap items-center justify-between gap-8 ${className}`}>
        <div className="">
          <h3 className="text-primary font-bold">{mainText}</h3>
          <p className="text-secondary">{secondaryText}</p>
        </div>
        <div className="">
          <form
            onSubmit={handleNewsLetterFormSubmission}
            className="flex flex-row flex-nowrap gap-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="p-2 border border-brd bg-transparent  focus:outline-none focus:ring-2 focus:ring-btn-primary rounded-lg"
            />
            <button className="p-2 px-6 bg-btn-primary text-background rounded-lg hover:opacity-60 transition duration-[400ms] cursor-pointer">Subscribe</button>
          </form>
        </div>
      </div>
    )
  }
  
  export default NewsLetterSubscription
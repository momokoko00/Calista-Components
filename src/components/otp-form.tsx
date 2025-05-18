import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp"

export function OtpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>OTP Code</CardTitle>
          <CardDescription>
            Enter the 6-digit code was sent your email address to verify your account..
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <InputOTP maxLength={6} containerClassName="justify-center">
                <InputOTPGroup>
                  {[...Array(6)].map((_, i) =>
                    i === 3 ? (
                      <React.Fragment key={i}>
                        <InputOTPSeparator />
                        <InputOTPSlot index={i} />
                      </React.Fragment>
                    ) : (
                      <InputOTPSlot key={i} index={i} />
                    )
                  )}
                </InputOTPGroup>
              </InputOTP>
              <div className="flex flex-col gap-3">
                <Button variant="roundAction" type="submit" className="w-full">
                  Verify
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

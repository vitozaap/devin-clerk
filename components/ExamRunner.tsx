"use client";

import { useEffect, useRef, useState } from "react";
import { startExam } from "@/app/exam/actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import type { ExamQuestion } from "@/lib/questions";

export function ExamRunner({
  certificationName,
  questions,
  durationSeconds,
}: {
  certificationName: string;
  questions: ExamQuestion[];
  durationSeconds: number;
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [current, setCurrent] = useState(0);
  const [remaining, setRemaining] = useState(durationSeconds);
  const [submitted, setSubmitted] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);
  const remainingRef = useRef(durationSeconds);
  const answeredCount = Object.keys(answers).length;
  const question = questions[current];
  const timerText = `${Math.floor(remaining / 60)
    .toString()
    .padStart(2, "0")}:${(remaining % 60).toString().padStart(2, "0")}`;

  useEffect(() => {
    if (submitted) {
      return;
    }

    const intervalId = window.setInterval(() => {
      const seconds = Math.max(remainingRef.current - 1, 0);
      remainingRef.current = seconds;
      setRemaining(seconds);

      if (seconds === 0) {
        setTimeExpired(true);
        setSubmitted(true);
      }
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [submitted, durationSeconds]);

  if (submitted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>
            {timeExpired ? "Time's up — exam submitted" : "Exam submitted"}
          </CardTitle>
          <CardDescription>
            You answered {answeredCount} of {questions.length} questions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Scoring and per-question review are coming next.
          </p>
          <form action={startExam}>
            <Button type="submit">New exam</Button>
          </form>
        </CardContent>
      </Card>
    );
  }

  if (!question) {
    return null;
  }

  const lastQuestion = current === questions.length - 1;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate font-semibold">{certificationName}</p>
          <p className="text-sm text-muted-foreground">
            Question {current + 1} of {questions.length}
          </p>
        </div>
        <Badge
          variant="outline"
          className={`tabular-nums ${remaining < 60 ? "text-destructive" : ""}`}
          aria-label={`Time remaining ${timerText}`}
        >
          {timerText}
        </Badge>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span>Answered</span>
          <span className="text-muted-foreground">
            {answeredCount}/{questions.length}
          </span>
        </div>
        <Progress
          value={answeredCount}
          max={questions.length}
          aria-label={`${answeredCount} of ${questions.length} questions answered`}
        />
      </div>
      <Card>
        <CardHeader className="gap-3">
          <Badge variant="outline" className="w-fit">
            {question.domain}
          </Badge>
          <CardTitle className="text-lg">{question.prompt}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={answers[question.id] ?? ""}
            onValueChange={(value) =>
              setAnswers((previous) => ({
                ...previous,
                [question.id]: value,
              }))
            }
            disabled={submitted}
            aria-label={`Question ${current + 1} options`}
          >
            {question.options.map((option, optionIndex) => {
              const optionId = `${question.id}-option-${optionIndex}`;

              return (
                <Label
                  key={optionId}
                  htmlFor={optionId}
                  className="cursor-pointer items-start rounded-lg border p-3 leading-normal hover:bg-muted/50"
                >
                  <RadioGroupItem
                    id={optionId}
                    value={String(optionIndex)}
                  />
                  <span>{option}</span>
                </Label>
              );
            })}
          </RadioGroup>
        </CardContent>
        <CardFooter className="justify-between gap-3">
          <Button
            type="button"
            variant="outline"
            disabled={current === 0}
            onClick={() => setCurrent((index) => Math.max(index - 1, 0))}
          >
            Previous
          </Button>
          <Button
            type="button"
            onClick={() => {
              if (lastQuestion) {
                setSubmitted(true);
              } else {
                setCurrent((index) => index + 1);
              }
            }}
          >
            {lastQuestion ? "Submit exam" : "Next"}
          </Button>
        </CardFooter>
      </Card>
      <nav aria-label="Jump to question" className="flex flex-wrap gap-2">
        {questions.map((item, index) => {
          const answered = answers[item.id] !== undefined;

          return (
            <Button
              key={item.id}
              type="button"
              variant={answered ? "default" : "outline"}
              size="icon-xs"
              className={current === index ? "ring-2 ring-ring ring-offset-2" : ""}
              aria-label={`Question ${index + 1}${answered ? ", answered" : ""}`}
              aria-current={current === index ? "step" : undefined}
              onClick={() => setCurrent(index)}
            >
              {index + 1}
            </Button>
          );
        })}
      </nav>
    </div>
  );
}

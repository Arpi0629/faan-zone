"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useHeader } from "@/hooks/header";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableCaption,
  TableFooter,
} from "../../ui";

interface Props {
  className?: string;
}

export const WalletTable: React.FC<Props> = (props) => {
  const { className } = props;
  const t = useTranslations();
  const { tables } = useHeader();

  return (
    <>
      {tables?.map((el: any) => {
        return (
          <Table
            key={el.id}
            className={cn("overflow-auto w-[200px]", className)}
          >
            <TableCaption className="text-left mb-0.5 w-full text-[clamp(20px,5vw,22px)]">
              {t(`tables.title.${el.title}`)}
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>{t("walletTableOne.head.store")}</TableHead>
                <TableHead>{t("walletTableOne.head.date")}</TableHead>
                <TableHead>{t("walletTableOne.head.action")}</TableHead>
                <TableHead>{t("walletTableOne.head.coin")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="w-full">
              {el.firstBody?.map((item: any) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>{item.store}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{t(`walletTableOne.${item.action}`)}</TableCell>
                    <TableCell>{item.coins}</TableCell>
                  </TableRow>
                );
              })}
              {el.secondBody?.map((item: any) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>{item.store}</TableCell>
                    <TableCell>
                      {item.storeCoins}
                      <span className="ml-1">Coins</span>
                    </TableCell>
                    <TableCell>{item.services}</TableCell>
                    <TableCell>
                      {item.servicesCoins}
                      <span className="ml-1">Coins</span>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            {el.secondBody && (
              <TableFooter>
                <TableRow>
                  <TableHead>{t("footer.totalEarnedOne")}</TableHead>
                  <TableHead>{t("footer.totalEarnedCoinsOne")}</TableHead>
                  <TableHead>{t("footer.totalEarnedTwo")}</TableHead>
                  <TableHead>{t("footer.totalEarnedCoinsTwo")}</TableHead>
                </TableRow>
              </TableFooter>
            )}
          </Table>
        );
      })}
    </>
  );
};

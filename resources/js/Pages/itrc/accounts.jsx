import AuthLayout from "@/Layouts/auth-layout"
import { useEffect, useState } from "react"
import AccountList from "@/Components/list/account-list"
import { Link } from "@inertiajs/react"

const AccountManagement = (props) => {

    useEffect(() => {
        console.log(props.account_list)
    }, [])

    const buttonStyle = 'px-4 h-[2rem] rounded-md bg-blue-700 text-white text-[0.8em] hover:bg-blue-900'
          
    return (
        <>
        <AuthLayout user={props.user} authType={props.itrc}>
            <div className="w-full py-10">
                <div className="w-full">
                    <h1 className="text-[1.8em] font-[900]">User Account List</h1>
                </div>
                <div className="w-full flex gap-5">
                    <AccountList 
                        row={props.account_list} 
                    />
                </div>
                {(props.account_list.total == props.account_list.per_page)
                ?
                <div className="py-4 flex gap-3">
                    <button className="text-[0.9em]">
                        <Link href={props.account_list.first_page_url}>First</Link>
                    </button>
                    <div className="flex gap-1">
                        {props.account_list.links.map((e, i) => 
                                      <Link href={e.url} key={i}>
                                          <button className={buttonStyle}>{e.label}</button>
                                      </Link>
                            )
                        }
                    </div>
                    <button className="text-[0.9em]">
                        <Link href={props.account_list.last_page_url}>Last</Link>
                    </button>
                </div>
                :
                ''}
            </div>
        </AuthLayout>
        </>
    )
}

export default AccountManagement
import "./SettingPage.css";
import NavigationBar from "../components/NavigationBar";
import { fetchUserData } from "../utils/apiFetcher";
import { useState, useEffect } from "react";

const SettingPage = () => {
    const [dataBaseData, setDataBaseData] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            const { user } = await fetchUserData();
            setDataBaseData(user);
        };
        loadData();
        }, []);
        console.log(dataBaseData?.monthlyAttendance[0].dateOfAttended)
    return (
        <div className="setting_page_main_conta">
            <NavigationBar/>
            <p className="setting_text_1">
                Settings
            
            </p>
            <p className="nottxt">No Data Appear Here !!!</p>
        </div>
    );
};

export default SettingPage;
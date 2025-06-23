import "./SettingPage.css";
import NavigationBar from "../components/NavigationBar";

const SettingPage = () =>{
    return(
        <div className="setting_page_main_conta">
            <NavigationBar/>
            <p className="setting_text_1">Settings</p>
            <p className="nottxt">No Data Appear Here !!!</p>
            {/* <button className="clear_all_data_btn">clear all data</button> */}
        </div>
    );
};

export default SettingPage;
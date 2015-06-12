<?php
	$dir = "/Library/WebServer/Documents/image";
	$retArray = array();
	$strangeArray = array();
	$i = 0;
	if(is_dir($dir)){
		if($dh = opendir($dir)){
			while(($topdirfile = readdir($dh)) !== false){
				if($topdirfile == '.' || $topdirfile == '..') continue;
				$tmpdir = $dir."/".$topdirfile."/";
				$cnt = 0;
				if(is_dir($tmpdir)){
					if($subdir = opendir($tmpdir)){
						while(($subdirfile = readdir($subdir)) != false){
							if($subdirfile == '.' || $subdirfile == '..') continue;
							$cnt++;
						}
						$subdirarray = array();
						$subdirarray["name"] = $topdirfile;
						$subdirarray["len"] = $cnt;
						$retArray[$i] = $subdirarray;
						$lsdir = $tmpdir."/".$subdirfile."/";
						/*if(is_dir($lsdir)){
							if($lssubdir = opendir($lsdir)){
								while(($imagefilename = readdir($lssubdir)) != false){
									if($imagefilename == '.' || $imagefilename == '..'){
										continue;
									}
									print_r($imagefilename);
									if(!(strpos($imagefilename, "jpeg"))){
										$fullname = $lsdir.$imagefilename;
										array_push($strangeArray, $fullname);
									}
								}
							}
						}*/
						$i++;
						closedir($subdir);
					}
				}
			}
			closedir($dh);
		}
	}
	//echo "<br/>";
	//echo "<br/>";
	echo json_encode($retArray);
	//echo "<br/>";
	//echo "<br/>";
	//print_r($strangeArray);
?>
